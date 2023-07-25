import {
  CategoryWrapper,
  CategoryIcon,
  Categorytext,
} from './CategoryItem.styled.ts';

interface CategoryItemProps {
  name: string;
  categoryid: string;
  categoryimg: string;
  setCategory: (newCategory: string) => void;
  category: string;
}

const CategoryItem = ({
  name,
  categoryid,
  categoryimg,
  setCategory,
  category,
}: CategoryItemProps) => {
  const handleClickChangeCategory = (categoryid: string) => {
    setCategory(categoryid);
  };

  return (
    <CategoryWrapper onClick={() => handleClickChangeCategory(categoryid)}>
      <CategoryIcon src={categoryimg} />
      <Categorytext className={category === categoryid ? 'selected' : ''}>
        {name}
      </Categorytext>
    </CategoryWrapper>
  );
};

export default CategoryItem;
