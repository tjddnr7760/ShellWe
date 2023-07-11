import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 52px;
  height: 52px;
`;

export const Oath = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const OathImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const UserinfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  justify-content: center;
`;

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  gap: 3px;
`;

export const EmailInputBox = styled.div`
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: stretch;
  border: 0.5px solid #00000080;
`;

export const EmailInput = styled.input`
  border: none;
  border-radius: 15px;
  min-height: 30px;
  padding: 5px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const EmailOverlapCheck = styled.button`
  background-color: #48cae4;

  border-radius: 15px;
  font-weight: 300;
  cursor: pointer;
  border: 0.5px solid white;
  font-weight: 400;
  font-size: 14px;

  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
`;

export const EmailError = styled.span`
  margin: 5px 0px;
  font-weight: 400;
  font-size: 10px;
  color: red;
`;

export const LoginButton = styled.button`
  background-color: #48cae4;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  border: 0.5px solid white;
  font-weight: 500;
  font-size: 20px;
  width: 100%;
  min-width: 300px;
  height: 40px;
  &:hover {
    color: #023e8a;
    background-color: #90e0ef;
  }
  &:active {
    transform: translateY(2px);
  }
`;
