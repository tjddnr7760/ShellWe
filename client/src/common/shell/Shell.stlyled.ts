import styled from 'styled-components';

export const ShellContainer = styled.div`
  width: fit-content;
  max-width: 400px;
  height: fit-content;
  flex-shrink: 0;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
  background-color: #caf0f8;
  border-radius: 10px;
`;
export const ShellImgWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  width: 250px;
  height: 230px;
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

  margin: 10px;
  gap: 10px;
`;

export const ShellTitleInfo = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: white;
  border-radius: 10px;
  padding: 10px;
  flex-grow: 1;
`;
