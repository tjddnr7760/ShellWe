import { useState } from 'react';
import styled from 'styled-components';
import LikeDefaultShell from '../../asset/likeshells/LikeDefaultShell.svg';
import LikeSelectedShell from '../../asset/likeshells/LikeSelectedShell.svg';

export const ShellContainer = styled.div`
  width: 23%;
  height: 45%;
  min-width:200px;
  min-height:230px;

  flex-shrink: 0;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
  background-color: #caf0f8;
  border-radius: 10px;
`;
export const ShellImgWrapper = styled.div`
  position: relative;
  height: 80%;
  border-radius: 10px;
  margin: 10px 10px 0px 10px;
`;

export const ShellImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25) inset;
  background: url(${(props) => props.src}), lightgray 50% / cover no-repeat,
    #00b4d8;
`;

export const LikeShellIcon = styled.img`
  position: absolute;
  height: 30px;
  width: 30px;
  object-fit: cover;

  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;
export const ShellInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  gap: 10px;
`;
export const Avatar = styled.div`
  height: 35px;
  width:35px;
  background-color: white;

  border-radius: 100%;
`;
export const ShellTitleInfo = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background:white;
  border-radius: 10px;
  padding:5px;
  width:77%;

`;

const Shell = () => {
  const [selecedShell, setSelecedShell] = useState(false);

  const handleLikeCilck = () => {
    setSelecedShell((prev) => !prev);
  };

  return (
    <ShellContainer>
      <ShellImgWrapper>
        <ShellImg src="/dummyimg.svg" />
        <LikeShellIcon
          src={selecedShell ? LikeSelectedShell : LikeDefaultShell}
          onClick={handleLikeCilck}
        />
      </ShellImgWrapper>
      <ShellInfoWrapper>
        <Avatar />
        <ShellTitleInfo>
          제목제목제목제

        </ShellTitleInfo>
      </ShellInfoWrapper>
    </ShellContainer>
  );
};

export default Shell;
