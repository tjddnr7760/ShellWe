package com.shellwe.websocket.auth.filter;

import com.shellwe.websocket.auth.authority.EmailVerifiedAuthority;
import com.shellwe.websocket.auth.jwt.JwtTokenizer;
import com.shellwe.websocket.auth.memberDetails.MemberContextInform;
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

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        log.info("url = {}", request.getRequestURI());
        try {
            log.info("verification filter active start");
            Map<String, Object> claims = verifyJws(request).getBody();
            setAuthenticationToContext(claims);
        } catch (Exception e) {
            log.info("unauthorized member access denied");
            request.setAttribute("exception", e);
        }
        filterChain.doFilter(request, response);
    }


    private Jws<Claims> verifyJws(HttpServletRequest request) {
        String accessToken= "eyJhbGciOiJIUzM4NCJ9.eyJwcm9maWxlVXJsIjoiZW1wdHkiLCJkaXNwbGF5TmFtZSI6IuydvOuwmOuhnOq3uOyduOyduCIsImlkIjoxLCJlbWFpbFZlcmlmaWNhdGlvblN0YXR1cyI6dHJ1ZSwic3ViIjoibHRzODkwMzAzQGdvb2dsZS5jb20iLCJpYXQiOjE2ODg5NjM3ODUsImV4cCI6MTY4ODk5Mzc4NX0.fbaJDU9blzCPvX0sghw4gRX_xEMjXJCHkimAfcFm3CQbVUP8453TvdkVFhIgIv57";

//        if(request.getRequestURI().startsWith("/ws")) accessToken = request.getHeader("sec-websocket-protocol");
//        else accessToken = request.getHeader("Authorization").replace("Bearer ", "");

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        Jws<Claims> claims = jwtTokenizer.getClaims(accessToken, base64EncodedSecretKey);

        for (Map.Entry<String, Object> entry : claims.getBody().entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();
            log.info("access token information key = {}, value = {}", key, value);
        }
        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        Long id = Long.parseLong(claims.get("id").toString());
        String email = (String) claims.get("sub");
        String displayName = (String) claims.get("displayName");
        String profileUrl = (String) claims.get("profileUrl");

        boolean emailVerificationStatus = (boolean) claims.get("emailVerificationStatus");

        List<EmailVerifiedAuthority> emailVerifiedAuthorities =
                Collections.singletonList(new EmailVerifiedAuthority(emailVerificationStatus));

        MemberContextInform memberContextInform = new MemberContextInform(id, email, displayName, profileUrl);

        Authentication authentication = new UsernamePasswordAuthenticationToken(memberContextInform, null, emailVerifiedAuthorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
