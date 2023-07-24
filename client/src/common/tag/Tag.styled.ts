import styled from 'styled-components';

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: #f5fdff;
  &:focus-within {
    border-color: #023e8a;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e0e0e0;
  margin: 5px;
  padding: 5px;
  white-space: nowrap;
  border-radius: 5px;
  background-color: #0096c7;
  @media (max-width: 768px) {
    margin: 3px;
    padding: 4px;
  }
`;

const TagText = styled.span`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-right: 4px;
  color: white;

  @media (max-width: 768px) {
    margin: 0;
    font-size: 16px;
  }
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 50%;
  color: black;
  border: 0;
  cursor: pointer;
  background-color: #0096c7;
`;

const TagInput = styled.input`
  display: inline-flex;
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  margin: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export { TagContainer, TagWrapper, TagText, CloseButton, TagInput };
