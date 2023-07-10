// import { useEffect } from 'react';
import { Icon, UserImg } from './Avatar.styled.ts';
import userimg from '../../asset/avatar/userimg.svg';
import noprofile from '../../asset/avatar/noprofile.svg';

const Avatar = ({ avatartype }: { avatartype: string }) => {
  // useEffect(() => {
  //         // 비동기 함수 재사용
  //         // method: GET
  //         // api url:
  //     })

  const userImg = userimg;
  // response 객체 data인 member.picture를 넣을 예정

  return avatartype === 'UserImg' ? (
    <UserImg>
      <img src={userImg !== '' ? userimg : noprofile} alt="user-image" />
    </UserImg>
  ) : (
    <Icon>
      <img src={userImg ? userimg : noprofile} alt="user-icon" />
      {/* member.picture data 없을 경우, noprofile image로 대체 */}
    </Icon>
  );
};

export default Avatar;

// Nav Icon
// 1. div로 동그라미 하나 만들기
// 2. 규격 설정 35x35
// 3. get 요청으로 recoil에 저장된 전역 memberId의 picture 렌더(주석으로 작성)

// Shell userImg
// 1. div로 동그라미 하나 만들기
// 2. 규격 설정 50x50
// 3. get 요청으로 이미지 불러오기(case로 분기)
// 3-1. case 1(요청함 페이지)
// shell.member.picture
// 3-2. case 2
// case 2-1. ChatList rooms.member.picture
// case 2-2. ChatRoom messages.member.picture
