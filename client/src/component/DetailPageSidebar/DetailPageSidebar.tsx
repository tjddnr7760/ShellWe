import { useState } from 'react';
import {
  Wrapper,
  Div,
  DealState,
  Text
} from './DetailPageSidebar.styled.ts';
import { SmallButton3 } from '../../common/button/Button.styled.ts';
import Toggle from './Toggle.tsx'

const DetailPageSidebar = () => {
  const [toggleOn, setToggleOn] = useState(true);

  const handleClick = () => {
    setToggleOn((prevToggle) => !prevToggle);
  };

  return (
    <Wrapper>
      <DealState>
        <Text>{toggleOn ? '거래중' : '거래완료'}</Text>
        <Toggle toggleOn={toggleOn} handleClick={handleClick} />
      </DealState>
      <Div>
        <SmallButton3>
          <Text>수정</Text>
        </SmallButton3>
        {/* 수정 버튼 컴포넌트 붙이기 / 수정 클릭 시, 제품 수정 페이지로 리다이렉트(JS)*/}
      </Div>
      <Div>
        <SmallButton3>
          <Text>삭제</Text>
        </SmallButton3>
        {/* 삭제 버튼 컴포넌트 붙이기 / 삭제 클릭 시, 해당 Shell Delete 요청(JS)*/}
      </Div>
    </Wrapper>
  );
};


export default DetailPageSidebar;