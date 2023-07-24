import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 640px;
  flex-grow: 1;
`;

const ShellInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: rgba(202, 240, 248, 0.5);
  padding: 10px;
  gap: 10px;
`;

const UserInfoAndHamburgerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  gap: 10px;
  height: 45px;
  padding: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #ffffff;
`;

const DisplayName = styled.span`
  min-width: 50px;
  font-size: 16px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  background-color: #ffffff;
  gap: 5px;

  div {
    display: flex;
    gap: 10px;
    margin: 0;
    flex-wrap: wrap;
  }
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

const ShellStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

const DefaultBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  background-color: #ffffff;
  line-height: 20px;
`;

const SeeMoreBodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
  background-color: #ffffff;
  line-height: 20px;
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
  padding: 15px;
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
  DisplayName,
  Div,
  DefaultBodyWrapper,
  SeeMoreBodyWrapper,
  Hamburger,
  Category,
  SeeMore,
  PokeButton,
  PokeBox,
  ShellStatus,
};
