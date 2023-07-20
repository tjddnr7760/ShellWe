import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;
export const LoginBox = styled.form`
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

export const OathContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 42px;
  min-height: 30px;
  border-radius: 15px;
  border: 0.5px solid #00000050;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`;
export const OathImg = styled.img`
  width: 30px;
`;

export const OathText = styled.div`
  padding: 15px;
`;

export const UserinfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;

  justify-content: center;
`;

export const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  gap: 3px;
`;

export const DivInputBox = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const DivInput = styled.input`
  border: none;
  border-radius: 15px;
  min-height: 30px;
  padding: 5px;
  width: 100%;
  border: 0.5px solid #00000080;
  &::placeholder {
    font-size: 10px;
  }
`;

export const CheckError = styled.span`
  margin: 5px 0px;
  font-weight: 400;
  font-size: 10px;
  color: red;
`;
export const CheckPosible = styled.div`
  margin: 5px 0px;
  font-weight: 400;
  font-size: 10px;
  color: #489f48;
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

  &:active {
    transform: translateY(2px);
  }
`;

export const LoginSubFuntionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 130px;
`;
export const LoginSubFuntion = styled.div`
  color: gray;
  font-size: 12px;
  cursor: pointer;
`;
