import { SeeMoreBodyWrapper, Category } from './ShellDetail.styled';
import { BodyProps } from '../../dataset/ShellDetailType.ts';

const SeeMoreBody = ({ category, body }: BodyProps) => {
  return (
    <SeeMoreBodyWrapper>
      <Category>{category}</Category>
      {body}
    </SeeMoreBodyWrapper>
  );
};

export default SeeMoreBody;
