import styled from 'styled-components';

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  &:hover {
    background-color: #90e0ef;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
`;

const Icon = styled(Avatar)`
  width: 35px;
  height: 35px;
`;

const UserImg = styled(Avatar)`
  width: 50px;
  height: 50px;
`;

export { Icon, UserImg };
