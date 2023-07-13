import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroller';

import CategoryList from '../categorylist/CategoryList.tsx';
import {
  CategoryListWrapper,
  ShellListContainer,
  SeachToolbarWrapper,
  ShellsWrapper,
  ShellsContainer,
} from './ShellList.styled.ts';
import SearchToolbar from '../searchtoolbar/SearchToolbar.tsx';
import LiftBtn from '../../common/liftbtn/LiftBtn.tsx';
import Shell from '../../common/shell/Shell.tsx';
import { useInfiniteScroll } from '../../hooks/shells/useInfiniteScroll';
import { ShellType } from '../../common/shell/Shell.tsx';

const ShellList = ({ pagetype }: { pagetype: string }) => {
  const [category, setCategory] = useState(
    pagetype === 'product' ? 'p_all' : 't_all'
  );
  const { ShellsListData, hasNextPage, loadMore } = useInfiniteScroll(
    2,
    pagetype,
    category
  );

  return (
    <InfiniteScroll loadMore={loadMore} hasMore={hasNextPage}>
      <ShellListContainer>
        <SeachToolbarWrapper>
          <SearchToolbar />
        </SeachToolbarWrapper>
        <CategoryListWrapper>
          <CategoryList
            pagetype={pagetype}
            category={category}
            setCategory={setCategory}
          />
        </CategoryListWrapper>
        <ShellsContainer>
          <ShellsWrapper>
            {ShellsListData.map((shell: ShellType) => (
              <Shell key={uuidv4()} shell={shell} />
            ))}
          </ShellsWrapper>
        </ShellsContainer>

        <LiftBtn />
      </ShellListContainer>
    </InfiniteScroll>
  );
};

export default ShellList;
