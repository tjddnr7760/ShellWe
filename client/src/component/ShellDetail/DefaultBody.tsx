import { BodyProps } from '../../dataset/TypeOfShellDetail.ts';
import { MakePartOfBodyText } from '../../utill/makeBodyText.ts';
import {
  DefaultBodyWrapper,
  SeeMore,
  SeeMoreStatus,
} from './ShellDetail.styled.ts';
const DefaultBody = ({ body, seeMoreBody, handleSeeMoreBody }: BodyProps) => {
  return (
    <DefaultBodyWrapper>
      {MakePartOfBodyText(body, 80)}
      <SeeMore onClick={() => handleSeeMoreBody()}>
        <SeeMoreStatus>
          {seeMoreBody === false ? '더 보기' : '접기'}
        </SeeMoreStatus>
      </SeeMore>
    </DefaultBodyWrapper>
  );
};

export default DefaultBody;
