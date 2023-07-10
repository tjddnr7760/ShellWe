import { TagWrapper, TagText, CloseButton } from './Tag.styled';

interface TagBoxProps {
  type: string;
  index?: number;
  tag: string;
  handleRemove?: (index: number) => void; // 수정: handleRemove를 선택적으로 지정
}

const TagBox = ({ type, index, tag, handleRemove }: TagBoxProps) => {
  return (
    <TagWrapper>
      <TagText>{tag}</TagText>
      {type === 'write' && handleRemove && index != undefined && (
        <CloseButton onClick={() => handleRemove(index)}>X</CloseButton>
      )}
    </TagWrapper>
  );
};

export default TagBox;
