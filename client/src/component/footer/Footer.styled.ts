import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  border-top: 0.5px solid rgba(130, 130, 130, 0.5);
  background: rgba(202, 240, 248, 0.5);
  width: 84%;
  height: 150px;
  padding: 37px 0px 36px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 37px;

  div {
    display: flex;
    width: 380px;
    height: 20px;
    flex-shrink: 0;
    gap: 31px;
  }

  span {
    color: rgba(43, 43, 43, 0.75);
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
