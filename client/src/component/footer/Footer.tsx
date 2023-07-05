import { FooterContainer } from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        <span>Help</span>
        <span>Send Feedback</span>
        <span>Privacy Policy</span>
        <span>Legal</span>
      </div>
      <div>
        <span>Copyright © 2023 ShellWe Inc. All rights reserved.</span>
      </div>
    </FooterContainer>
  );
};

export default Footer;
