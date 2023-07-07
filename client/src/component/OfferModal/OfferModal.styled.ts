import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 610px;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  background-color: rgba(202, 240, 248, 0.5);
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
`;

const ShellListContainer = styled(Div)`
  border-top: 0.5px solid #48cae4;
  height: 500px;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: 1px;
`;

const MyShellListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 590px;
  height: 500px;
  padding-top: 25px;
  padding-bottom: 15px;
  overflow-y: scroll; /* Add scrollbar when content overflows */
`;

const MyShellContainer = styled(Div)`
  flex-direction: row;
  justify-content: space-between;
  width: 540px;
  background-color: #ffffff;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  padding: 6px;
  padding-right: 20px;
`;

const ImgBox = styled.img`
  width: 90px;
  height: 90px;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  margin-left: 14px;
  font-size: 20px;
`;

const ShellInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 2px;
  font-weight: 400;
`;

export {
  CreateShellButton,
  Wrapper,
  Div,
  ShellListContainer,
  MyShellListWrapper,
  MyShellContainer,
  ImgBox,
  Title,
  ShellInfo,
  ButtonDiv,
};
