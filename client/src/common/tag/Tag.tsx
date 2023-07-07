import React, { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TagContainer, TagInput } from './Tag.styled';
import TagBox from './TagBox.tsx';

const Tag = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputTagValue, setInputTagValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTagValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const tag = inputTagValue.trim();

      if (tag !== '' && tags.length < 4) {
        setTags([...tags, tag]);
      }
      setInputTagValue('');
    }
  };

  const handleRemove = (index: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <TagContainer>
      {tags.map((tag, index) => (
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
        placeholder="#태그를 입력해주세요. (최대 4개)"
      />
    </TagContainer>
  );
};

export default Tag;
