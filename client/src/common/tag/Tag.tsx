import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TagContainer, TagInput } from './Tag.styled';
import TagBox from './TagBox.tsx';
interface TagProps {
  tagList: string[];
  setTagList: Dispatch<SetStateAction<string[]>>;
}
const Tag = ({ tagList, setTagList }: TagProps) => {
  const [inputTagValue, setInputTagValue] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setInputTagValue(e.target.value);
    }
  };
  let inDebounce: number;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const delay = 200;
    if (e.key === 'Enter') {
      e.preventDefault();
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {
        const tag = inputTagValue.trim();
        if (tag !== '' && tagList.length < 4) {
          setTagList([...tagList, tag]);
        }
        setInputTagValue('');
      }, delay);
    }
  };

  const handleRemove = (index: number) => {
    const updatedTags = [...tagList];
    updatedTags.splice(index, 1);
    setTagList(updatedTags);
  };

  return (
    <TagContainer>
      {tagList &&
        tagList.map((tag, index) => (
          <TagBox
            key={uuidv4()}
            index={index}
            type="write"
            tag={tag}
            handleRemove={handleRemove}
          />
        ))}
      <TagInput
        type="text"
        value={inputTagValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="#원하시는 쉘을 태그로 만들어 주세요. (최대 4개)"
      />
    </TagContainer>
  );
};

export default Tag;
