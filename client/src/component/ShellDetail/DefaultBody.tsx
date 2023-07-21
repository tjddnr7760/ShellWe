import { DefaultBodyWrapper, Category } from './ShellDetail.styled.ts';
import { BodyProps } from '../../dataset/ShellDetailType.ts';
import { MakePartOfBodyText } from '../../utill/makeBodyText.ts';

const DefaultBody = ({ category, body }: BodyProps) => {
  return (
    <DefaultBodyWrapper>
      <Category>{category}</Category>
      {MakePartOfBodyText(body, 80)}
    </DefaultBodyWrapper>
  );
};

export default DefaultBody;
