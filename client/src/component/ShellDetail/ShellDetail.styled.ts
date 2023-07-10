import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 400px;
  gap: 10px;
`;

const ShellInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 645px;
  max-height: fit-content;
  background-color: rgba(202, 240, 248, 0.5);
  padding: 10px;
  gap: 10px;
`;

const UserInfoAndHamburgerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
`;

const UserInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: 210px;
  height: 70px;
  background-color: #ffffff;
`;

const Nickname = styled.span`
  text-align: center;
  font-size: 16px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 16px;
  width: 630px;
  height: 50px;
  padding-left: 10px;
  background-color: #ffffff;
`;

const DefaultBody = styled(Div)``;

const SeeMoreBody = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  background-color: #ffffff;
  flex-direction: column;
  gap: 10px;
  height: fit-content;
  line-height: 20px;
`;

const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  font-size: 16px;
  height: 30px;
  border-radius: 10px;
  background-color: #0096c7;
  padding-top: 3px;
  margin-right: 8px;
`;

const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const PokeBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 665px;
  height: 70px;
`;

const PokeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  right: 10px;
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  background-color: #90e0ef;
  &:active {
    transform: translateY(3px);
  }
`;

export {
  Wrapper,
  ShellInfoContainer,
  UserInfoAndHamburgerDiv,
  UserInfoDiv,
  Nickname,
  Div,
  DefaultBody,
  SeeMoreBody,
  Hamburger,
  Category,
  SeeMore,
  PokeButton,
  PokeBox,
};
