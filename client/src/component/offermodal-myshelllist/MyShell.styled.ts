import styled from 'styled-components';

const MyShellContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  width: 100%;
  background-color: #ffffff;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  padding: 10px;

  div {
    padding-right: 20px;
  }
`;
const ShellInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
`;

const ImgBox = styled.img`
  width: 90px;
  height: 90px;
  border: 0.5px solid #48cae4;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Title = styled.span`
  padding: 7px;
  font-size: 26px;
`;

const Category = styled.span`
  padding: 7px;
  font-size: 20px;
`;

export { MyShellContainer, ImgBox, Title, Category, ShellInfo };
