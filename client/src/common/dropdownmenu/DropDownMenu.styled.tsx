import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DropdownBTN = styled.img`
  width: 32px;
  height: 32px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  border-radius: 100%;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 130px;
  border: 1px ridge #0077b6;
  gap: 12px;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  animation: ${fadeIn} 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 80px;
    font-size: 10px;
  }
`;
export { DropdownBTN, DropdownContainer, DropdownContent };
