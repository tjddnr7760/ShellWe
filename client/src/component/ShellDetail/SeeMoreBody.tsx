import { SeeMoreBodyWrapper, Category } from './ShellDetail.styled.ts';
import { BodyProps } from '../../dataset/TypeOfShellDetail.ts';

const SeeMoreBody = ({ category, body }: BodyProps) => {
  return (
    <SeeMoreBodyWrapper>
      <Category>{category}</Category>
      {body}
    </SeeMoreBodyWrapper>
  );
};

export default SeeMoreBody;
