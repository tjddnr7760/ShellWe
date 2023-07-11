import styled from 'styled-components';
import { Div } from '../offermodal/OfferModal.styled.ts';

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
const ShellInfo = styled.div`
  display: flex;
  align-items: center;
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

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 2px;
  font-weight: 400;
`;

export { MyShellContainer, ImgBox, Title, ShellInfo, ButtonDiv };
