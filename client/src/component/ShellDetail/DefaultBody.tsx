import { DefaultBodyWrapper, Category } from './ShellDetail.styled';
import { BodyProps } from './ShellDetail';

const DefaultBody = ({ category, body }: BodyProps) => {
  
  const MakePartOfBodyText = (body: string) => {
    // 한글로 띄어쓰기 없이 꽉 채운 글자 수 72개
    if (body.length < 72) {
      return body;
    } else {
      // 글자 수 72 이상이면 글자 수 70까지 자른다. 그리고 뒤에 . 혹은 ..을 붙여준다.
      const slicebody = body.slice(0, 70);
      return slicebody.charAt(slicebody.length - 1) === '.'
        ? slicebody + '.'
        : slicebody + '..';
    }
  };

  return (
    <DefaultBodyWrapper>
      <Category>{category}</Category>
      {MakePartOfBodyText(body)}
    </DefaultBodyWrapper>
  );
};

export default DefaultBody;
