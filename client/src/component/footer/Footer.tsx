import {
  FooterWrapper,
  FooterContainer,
  Address,
  FooterTitle,
  TeamAdress,
  PersonalAdress,
  TechnologyStackWrapper,
  TechnologyStackContainer,
  TechnologyStack,
  Copyright,
  NameAndGitText,
} from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <TeamAdress>
          <Address>
            <FooterTitle>Project: ShellWe</FooterTitle>
            <p>물품 및 재능 교환 애플리케이션</p>
          </Address>
          <Address>
            <FooterTitle>Repository Link</FooterTitle>
            <a href="https://github.com/codestates-seb/seb44_main_019">
              https://github.com/codestates-seb/seb44_main_019
            </a>
          </Address>
          <Address>
            <FooterTitle>Notion Link</FooterTitle>
            <a href="https://www.notion.so/ShellWe-1d0dc730b8ca4e4880c8b15f7461c257">
              https://www.notion.so/ShellWe-1d0dc730b8ca4e4880c8b15f7461c257
            </a>
          </Address>
          <Copyright>
            <p>프로젝트 기간: 22일 | 교육기관: Codestates</p>
            <Address>
              Copyright © 2023 ShellWe Inc. All Rights Reserved.
            </Address>
          </Copyright>
        </TeamAdress>

        <PersonalAdress>
          <FooterTitle>Team Github Link</FooterTitle>
          <li>
            <NameAndGitText>
              <span>주동우</span>
              <a href="https://github.com/DongwooJoo">
                https://github.com/DongwooJoo
              </a>
            </NameAndGitText>
          </li>
          <li>
            <NameAndGitText>
              <span>이호섭</span>
              <a href="https://github.com/lhs9602">
                https://github.com/lhs9602
              </a>
            </NameAndGitText>
          </li>
          <li>
            <NameAndGitText>
              <span>정찬영</span>
              <a href="https://github.com/Jeongchanyeong">
                https://github.com/Jeongchanyeong
              </a>
            </NameAndGitText>
          </li>
          <li>
            <NameAndGitText>
              <span>이태섭</span>
              <a href="https://github.com/Mason3144">
                https://github.com/Mason3144
              </a>
            </NameAndGitText>
          </li>
          <li>
            <NameAndGitText>
              <span>김영준</span>
              <a href="https://github.com/Cishcash8725">
                https://github.com/Cishcash8725
              </a>
            </NameAndGitText>
          </li>
          <li>
            <NameAndGitText>
              <span>황성욱</span>
              <a href="https://github.com/tjddnr7760/">
                https://github.com/tjddnr7760/
              </a>
            </NameAndGitText>
          </li>
        </PersonalAdress>
        <TechnologyStackWrapper>
          <FooterTitle>Technology Stack</FooterTitle>
          <TechnologyStackContainer>
            <TechnologyStack>
              <span>FE</span>
              <div>
                <li>Vite</li>
                <li>React</li>
                <li>React Query</li>
                <li>styled component</li>
                <li>Recoil</li>
                <li>Typescript</li>
              </div>
            </TechnologyStack>
            <TechnologyStack>
              <span>BE</span>
              <div>
                <li>Java</li>
                <li>Spring</li>
                <li>Spring Websocket</li>
                <li>Spring Data Jpa</li>
                <li>Spring Security</li>
                <li>Mysql</li>
                <li>AWS</li>
                <li>Github Actions</li>
              </div>
            </TechnologyStack>
          </TechnologyStackContainer>
        </TechnologyStackWrapper>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
