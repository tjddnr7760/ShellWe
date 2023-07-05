package com.shellwe.server.auth.filter;

import com.shellwe.server.auth.authority.EmailVerifiedAuthority;
import com.shellwe.server.auth.jwt.JwtTokenizer;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.PatternMatchUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Slf4j
public class JwtVerificationFilter extends OncePerRequestFilter {

    private final JwtTokenizer jwtTokenizer;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer) {
        this.jwtTokenizer = jwtTokenizer;
    }

    private static final String[] whitelist = {
            "/members", "/auth/login", "/members/email/*", "/login/oauth2/*", "/login"
    };

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        log.info("url = {}", request.getRequestURI());
        if (isLoginCheckPath((request.getRequestURI()))) {
            try {
                log.info("verification filter active start");
                Jws<Claims> jws = verifyJws(request);
                String subject = jws.getBody().getSubject();
                Map<String, Object> claims = jws.getBody();
                setAuthenticationToContext(subject, claims);
            } catch (Exception e) {
                log.info("unauthorized member access denied");
                request.setAttribute("exception", e);
            }
        }
        log.info("verification filter active end");
        filterChain.doFilter(request, response);
    }

    private boolean isLoginCheckPath(String requestURI) {
        return !PatternMatchUtils.simpleMatch(whitelist, requestURI);
    }

    private Jws<Claims> verifyJws(HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        Jws<Claims> claims = jwtTokenizer.getClaims(accessToken, base64EncodedSecretKey);

        for (Map.Entry<String, Object> entry : claims.getBody().entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();
            log.info("key = {}, value = {}", key, value);
        }
        return claims;
    }

    private void setAuthenticationToContext(String subject, Map<String, Object> claims) {
        boolean emailVerificationStatus = (boolean) claims.get("emailVerificationStatus");
        List<EmailVerifiedAuthority> emailVerifiedAuthorities =
                Collections.singletonList(new EmailVerifiedAuthority(emailVerificationStatus));

        Authentication authentication = new UsernamePasswordAuthenticationToken(subject, null, emailVerifiedAuthorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
