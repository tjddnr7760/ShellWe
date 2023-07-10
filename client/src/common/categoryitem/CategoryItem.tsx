import {
  CategoryWrapper,
  CategoryIcon,
  Categorytext,
} from './CategoryItem.styled.ts';
import { useRecoilState } from 'recoil';
import { catagoryState } from '../../recoil/atom.ts';

interface CategoryItemProps {
  name: string;
  categoryid: string;
  categoryimg: string;
}

const CategoryItem = ({ name, categoryid, categoryimg }: CategoryItemProps) => {
  const [catagoryType, catagoryTypeHandler] =
    useRecoilState<string>(catagoryState);

  const handleClickChangeCategory = (categoryid: string) => {
    catagoryTypeHandler(categoryid);
  };

  return (
    <CategoryWrapper onClick={() => handleClickChangeCategory(categoryid)}>
      <CategoryIcon src={categoryimg} />
      <Categorytext className={catagoryType === categoryid ? 'selected' : ''}>
        {name}
      </Categorytext>
    </CategoryWrapper>
  );
};

export default CategoryItem;
