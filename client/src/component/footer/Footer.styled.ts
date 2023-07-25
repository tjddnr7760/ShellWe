import styled from 'styled-components';

export const FooterWrapper = styled.ul`
  width: 100%;
  padding: 36px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  li {
    color: #626262;
  }
`;

export const TeamAdress = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #626262;
    &:focus,
    &:active {
      outline: none;
    }
  }
`;

export const CopyAdress = styled.div``;

export const FooterTitle = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  color: #4a4a4a;
`;
export const NameAndGitText = styled.div`
  display: flex;
  width: 300px;
  gap: 8px;
`;

export const PersonalAdress = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 600;
  }

  div {
    padding-top: 10px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: inherit;
    &:focus,
    &:active {
      outline: none;
    }
  }
  li {
    padding-bottom: 10px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;
export const TechnologyStackWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TechnologyStackContainer = styled.div`
  display: flex;
  gap: 40px;
  span {
    color: #626262;

    font-weight: 600;
  }
  li {
    padding-bottom: 10px;
    &:last-child {
      padding-bottom: 0;
    }
  }
  div {
    padding-top: 10px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TechnologyStack = styled.ul``;
