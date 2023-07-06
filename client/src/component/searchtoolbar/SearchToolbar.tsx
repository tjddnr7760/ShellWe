import {
  SearchToolbarContainer,
  SearchToolbarInput,
  MenuBTN,
  SearchToolbarInputWrapper,
} from './SearchToolbar.styled.tsx';

const SearchToolbar = () => {
  return (
    <SearchToolbarContainer>
      <SearchToolbarInputWrapper>
        <SearchToolbarInput type="text" placeholder="search.." />
      </SearchToolbarInputWrapper>
      <MenuBTN src={'/mdi-light_menu.svg'}></MenuBTN>
    </SearchToolbarContainer>
  );
};

export default SearchToolbar;
