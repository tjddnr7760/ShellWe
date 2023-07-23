import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 610px;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  background-color: rgba(202, 240, 248, 0.9);
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const CreateShellButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 0.5px solid #48cae4;
  background-color: #ffffff;
  &:hover {
    background-color: #48cae4;
  }
`;

const ShellListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 0.5px solid #48cae4;
  height: 500px;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 1px;
`;

const NoneShellsNotice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #464646;
`;

const NoticeTitle = styled.p`
  font-size: 90px;
`;
const NoticeBody = styled.p`
  font-size: 20px;
`;

export {
  CreateShellButton,
  Wrapper,
  Div,
  ShellListContainer,
  NoneShellsNotice,
  NoticeTitle,
  NoticeBody,
};
