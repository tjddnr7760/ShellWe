import {
  SeeMoreBodyWrapper,
  Category,
  SeeMoreBodyText,
} from './ShellDetail.styled.ts';
import { BodyProps } from '../../dataset/TypeOfShellDetail.ts';

const SeeMoreBody = ({ category, body }: BodyProps) => {
  return (
    <SeeMoreBodyWrapper>
      <Category>{category}</Category>
      <SeeMoreBodyText>{body}</SeeMoreBodyText>
    </SeeMoreBodyWrapper>
  );
};

export default SeeMoreBody;
