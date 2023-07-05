import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
`;

const UserImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.5);

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
`;

export { Icon, UserImg };
