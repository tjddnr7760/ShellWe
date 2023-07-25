import {
  SmallButton1,
  SmallButton2,
  SmallButton3,
  SmallButton4,
  SmallButton5,
  SmallButton6,
  BigButton1,
  BigButton2,
  BigButton3,
} from './Button.styled';

const Button: React.FC = () => {
  return (
    <>
      <SmallButton1>Button</SmallButton1>
      <SmallButton2>Button</SmallButton2>
      <SmallButton3>Button</SmallButton3>
      <SmallButton4>Button</SmallButton4>
      <SmallButton5>Button</SmallButton5>
      <SmallButton6>Button</SmallButton6>
      <BigButton1>Log in</BigButton1>
      <BigButton2>Log in</BigButton2>
      <BigButton3>Log in</BigButton3>
    </>
  );
};

export default Button;
