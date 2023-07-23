import styled from 'styled-components';

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    background-color: #90e0ef;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Icon = styled(Avatar)`
  width: 35px;
  height: 35px;
`;

// 유저 이미지 크기 80px로 수정
const UserImg = styled(Avatar)`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export { Icon, UserImg };
