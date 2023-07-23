import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useMediaQuery } from 'react-responsive';
import {
  DropdownContainer,
  DropdownBTN,
  DropdownContent,
} from './DropDownMenu.styled';
import { selectedOptionAtom } from '../../recoil/atom.ts';

const DropDownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useRecoilState(selectedOptionAtom);
  const isMobileScreen = useMediaQuery({ maxWidth: 768 });

  const handleMenuHover = () => {
    setIsDropdownOpen(true);
  };

  const handleMenuLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <DropdownContainer>
      <DropdownBTN
        src={'/mdi-light_menu.svg'}
        alt="Menu"
        onMouseEnter={isMobileScreen ? undefined : handleMenuHover}
        onClick={isMobileScreen ? handleClick : undefined}
      ></DropdownBTN>
      {isDropdownOpen && (
        <DropdownContent
          onMouseLeave={isMobileScreen ? undefined : handleMenuLeave}
        >
          <label>
            <input
              type="radio"
              name="sort"
              value="newest"
              checked={selectedOption === 'newest'} // 선택 상태에 따라 체크 여부 결정
              onChange={handleRadioChange}
            />
            최신순
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="oldest"
              checked={selectedOption === 'oldest'} // 선택 상태에 따라 체크 여부 결정
              onChange={handleRadioChange}
            />
            과거순
          </label>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default DropDownMenu;
