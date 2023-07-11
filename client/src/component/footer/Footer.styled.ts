import styled from 'styled-components';

export const FooterContainer = styled.div`
  bottom: 0;
  right: 0;
  display: flex;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 100%;
  height: 150px;
  padding: 37px 0px 36px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 37px;

  div {
    display: flex;
    gap: 30px;
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
