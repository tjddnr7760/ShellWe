import { useEffect, useState } from 'react';
import {
  DropdownContainer,
  DropdownBTN,
  DropdownContent,
} from './DropDownMenu.styled';
const DropDownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Newest'); //recoil로 변경

  const handleMenuHover = () => {
    setIsDropdownOpen(true);
  };

  const handleMenuLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <DropdownContainer>
      <DropdownBTN
        src={'/mdi-light_menu.svg'}
        alt="Menu"
        onMouseEnter={handleMenuHover}
      ></DropdownBTN>
      {isDropdownOpen && (
        <DropdownContent onMouseLeave={handleMenuLeave}>
          <label>
            <input
              type="radio"
              name="sort"
              value="Newest"
              checked={selectedOption === 'Newest'} // 선택 상태에 따라 체크 여부 결정
              onChange={handleRadioChange}
            />
            최신순
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="Oldest"
              checked={selectedOption === 'Oldest'} // 선택 상태에 따라 체크 여부 결정
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
