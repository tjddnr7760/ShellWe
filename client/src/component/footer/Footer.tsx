import {
  FooterWrapper,
  FooterContainer,
  Adress,
  FooterTitle,
  TeamAdress,
  PersonalAdress,
  TechnologyStackWrapper,
  TechnologyStackContainer,
  TechnologyStack,
} from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <TeamAdress>
          <Adress>
            <FooterTitle>ShellWe Repository Adress</FooterTitle>
            <a href="https://github.com/codestates-seb/seb44_main_019">
              https://github.com/codestates-seb/seb44_main_019
            </a>
          </Adress>
          <Adress>
            <FooterTitle>ShellWe Notion Adress</FooterTitle>
            <a href="https://www.notion.so/ShellWe-1d0dc730b8ca4e4880c8b15f7461c257">
              https://www.notion.so/ShellWe-1d0dc730b8ca4e4880c8b15f7461c257
            </a>
          </Adress>
          <Adress>Copyright © 2023 ShellWe Inc. All Rights Reserved.</Adress>
        </TeamAdress>

        <PersonalAdress>
          <FooterTitle>Personal GitHub Adress</FooterTitle>
          <li>
            <span>주동우</span>
            <div>
              <a href="https://github.com/DongwooJoo">
                https://github.com/DongwooJoo
              </a>
            </div>
          </li>
          <li>
            <span> 이호섭</span>
            <div>
              <a href="https://github.com/lhs9602">
                https://github.com/lhs9602
              </a>
            </div>
          </li>
          <li>
            <span> 정찬영</span>
            <div>
              <a href="https://github.com/Jeongchanyeong">
                https://github.com/Jeongchanyeong
              </a>
            </div>
          </li>
          <li>
            <span> 이태섭</span>
            <div>
              <a href="https://github.com/Mason3144">
                https://github.com/Mason3144
              </a>
            </div>
          </li>
          <li>
            <span> 김영준</span>
            <div>
              <a href="https://github.com/Cishcash8725">
                https://github.com/Cishcash8725
              </a>
            </div>
          </li>
          <li>
            <span> 황성욱</span>
            <div>
              <a href="https://github.com/tjddnr7760/">
                https://github.com/tjddnr7760/
              </a>
            </div>
          </li>
        </PersonalAdress>
        <TechnologyStackWrapper>
          <FooterTitle>Technology Stack</FooterTitle>
          <TechnologyStackContainer>
            <TechnologyStack>
              <span>FE</span>
              <div>
                <li>Vite</li>
                <li>react</li>
                <li>React Router Dom</li>
                <li>React Query</li>
                <li>styled component</li>
                <li>Axios</li>
                <li>Recoil</li>
                <li>Typescript</li>
                <li>node, npm</li>
                <li>eslint, prettier</li>
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
                <li>Aws</li>
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
