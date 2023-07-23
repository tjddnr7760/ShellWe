import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 350px;
  @media (max-width: 768px) {
    width: 220px;
    gap: 20px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 50px;
  height: 50px;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const OauthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  height: 45px;
  min-height: 30px;
  border-radius: 15px;
  border: 0.5px solid #00000050;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
  @media (max-width: 768px) {
    height: 35px;
  }
`;
export const OauthImg = styled.img`
  width: 30px;
`;

export const OauthText = styled.div`
  font-size: 20px;
  padding: 15px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const UserinfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 25px;
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-weight: 500;
  width: 100%;
  gap: 5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DivInputBox = styled.div`
  display: flex;
  width: auto;
`;

export const DivInput = styled.input`
  border: none;
  width: 100%;
  border-radius: 15px;
  height: 30px;
  padding: 10px;
  border: 0.5px solid #00000080;
  font-size: 18px;

  @media (max-width: 768px) {
    padding: 10px;
    height: 15px;
    font-size: 14px;
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
  width: 350px;
  height: 45px;
  @media (max-width: 768px) {
    width: 220px;
    height: 30px;
    font-size: 14px;
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const LoginSubFuntionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LoginSubFuntion = styled.div`
  color: gray;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
