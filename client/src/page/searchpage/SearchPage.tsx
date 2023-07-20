import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
  SeachToolbarWrapper,
  ShellListContainer,
  ShellsContainer,
  ShellsWrapper,
} from '../../component/shelllist/ShellList.styled';
import LiftBtn from '../../common/liftbtn/LiftBtn';
import SearchToolbar from '../../component/searchtoolbar/SearchToolbar';
import Shell from '../../common/shell/Shell';
import { ShellType } from '../../common/shell/Shell.tsx';
import { useSearchShells } from '../../hooks/shells/useSearchShells.ts';
import InfiniteScroll from 'react-infinite-scroller';

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || '';
  const { ShellsListData, hasNextPage, loadMore } =
    useSearchShells(8, searchQuery) || [];

  return (
    <ShellListContainer>
      <SeachToolbarWrapper>
        <SearchToolbar />
      </SeachToolbarWrapper>
      <ShellsContainer>
        <InfiniteScroll loadMore={loadMore} hasMore={hasNextPage}>
          <ShellsWrapper>
            {ShellsListData &&
              ShellsListData.map((shell: ShellType) => (
                <Shell key={uuidv4()} shell={shell} />
              ))}
          </ShellsWrapper>
        </InfiniteScroll>
      </ShellsContainer>

      <LiftBtn />
    </ShellListContainer>
  );
};

export default SearchPage;
