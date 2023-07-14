import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  SearchToolbarContainer,
  SearchToolbarInput,
  SearchToolbarInputWrapper,
} from './SearchToolbar.styled.tsx';

import DropDownMenu from '../../common/dropdownmenu/DropDownMenu.tsx';

const SearchToolbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setSearchInput(target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateURL(searchInput);
    }
  };
  const updateURL = (searchTerm: string) => {
    const searchParams = new URLSearchParams();
    searchParams.set('q', searchTerm);
    const url = `/search?${searchParams.toString()}`;
    navigate(url);
  };

  return (
    <SearchToolbarContainer>
      <SearchToolbarInputWrapper>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <SearchToolbarInput
          type="text"
          placeholder="검색.."
          value={searchInput}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </SearchToolbarInputWrapper>
      <DropDownMenu />
    </SearchToolbarContainer>
  );
};

export default SearchToolbar;
