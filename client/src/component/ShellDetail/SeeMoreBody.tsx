import {
  SeeMoreBodyWrapper,
  Category,
  SeeMoreBodyText,
  SeeMore,
  SeeMoreStatus,
  CloseSeeMore,
} from './ShellDetail.styled.ts';
import { BodyProps } from '../../dataset/TypeOfShellDetail.ts';

const SeeMoreBody = ({
  category,
  body,
  seeMoreBody,
  handleSeeMoreBody,
}: BodyProps) => {
  return (
    <SeeMoreBodyWrapper>
      <Category>{category}</Category>
      <SeeMoreBodyText>{body}</SeeMoreBodyText>
      <CloseSeeMore>
        <SeeMore onClick={() => handleSeeMoreBody()}>
          <SeeMoreStatus>
            {seeMoreBody === false ? '더 보기' : '접기'}
          </SeeMoreStatus>
        </SeeMore>
      </CloseSeeMore>
    </SeeMoreBodyWrapper>
  );
};

export default SeeMoreBody;
