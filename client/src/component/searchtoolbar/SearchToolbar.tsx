import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  SearchToolbarContainer,
  SearchToolbarInput,
  SearchToolbarInputWrapper,
} from './SearchToolbar.styled.tsx';

import DropDownMenu from '../../common/dropdownmenu/DropDownMenu.tsx';
const SearchToolbar = () => {
  const [searchInput, setSearchInput] = useState(''); // recoil로 이후 변경

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <SearchToolbarContainer>
      <SearchToolbarInputWrapper>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <SearchToolbarInput
          type="text"
          placeholder="search.."
          value={searchInput}
          onChange={handleInputChange}
        />
      </SearchToolbarInputWrapper>

      <DropDownMenu />
    </SearchToolbarContainer>
  );
};

export default SearchToolbar;
