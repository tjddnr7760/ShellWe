import CategoryItem from '../../common/categoryitem/CategoryItem.tsx';
import { CategoryContainer } from './CategoryList.styled.ts';
import { shellPageState } from '../../recoil/atom.ts';
import { useRecoilValue } from 'recoil';
import {
  PRODUCT_CATEGORIES_DATA,
  TALENT_CATEGORIES_DATA,
} from '../../dataset/CategoryData.ts';
interface CategoryListProps {
  pagetype: string;
  category: string;
  setCategory: (newCategory: string) => void;
}

const CategoryList = ({
  pagetype,
  category,
  setCategory,
}: CategoryListProps) => {
  //const [categoryData, setCategoryData] = useState<TalentCategory[]>([]);
  const categoryData =
    pagetype === 'product' ? PRODUCT_CATEGORIES_DATA : TALENT_CATEGORIES_DATA;

  return (
    <CategoryContainer>
      {categoryData.map((data) => (
        <CategoryItem
          key={data.id}
          name={data.name}
          categoryid={data.categoryid}
          categoryimg={data.categoryimg}
          setCategory={setCategory}
          category={category}
        />
      ))}
    </CategoryContainer>
  );
};

export default CategoryList;
