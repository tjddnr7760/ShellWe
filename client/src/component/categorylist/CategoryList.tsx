import { useEffect, useState } from 'react';
import CategoryItem from '../../common/categoryitem/CategoryItem.tsx';
import { CategoryContainer } from './CategoryList.styled.ts';
import { shellPageState } from '../../recoil/atom.ts';
import { useRecoilValue } from 'recoil';

const CategoryList = () => {
  const shellPage = useRecoilValue<string>(shellPageState);

  //const [categoryData, setCategoryData] = useState<TalentCategory[]>([]);
  const categoryData =
    shellPage === 'product' ? PRODUCT_CATEGORIES_DATA : TALENT_CATEGORIES_DATA;

  return (
    <CategoryContainer>
      {categoryData.map((data) => (
        <CategoryItem
          key={data.id}
          name={data.name}
          categoryid={data.categoryid}
          categoryimg={data.categoryimg}
        />
      ))}
    </CategoryContainer>
  );
};

export default CategoryList;

interface TalentCategory {
  id: number;
  name: string;
  categoryid: string;
  categoryimg: string;
}
const PRODUCT_CATEGORIES_DATA: TalentCategory[] = [
  {
    id: 1,
    name: 'All',
    categoryid: 'PALL',
    categoryimg: '/categoryimage/All.svg',
  },
  {
    id: 2,
    name: 'Device',
    categoryid: 'PDEVICE',
    categoryimg: '/categoryimage/Device.svg',
  },
  {
    id: 3,
    name: 'Food',
    categoryid: 'PFOOD',
    categoryimg: '/categoryimage/Food.svg',
  },
  {
    id: 4,
    name: 'Health',
    categoryid: 'PHEALTH',
    categoryimg: '/categoryimage/Health.svg',
  },
  {
    id: 5,
    name: 'Office',
    categoryid: 'POFFICE',
    categoryimg: '/categoryimage/Office.svg',
  },
  {
    id: 6,
    name: 'Life',
    categoryid: 'PLIFE',
    categoryimg: '/categoryimage/Life.svg',
  },
  {
    id: 7,
    name: 'etc',
    categoryid: 'PETC',
    categoryimg: '/categoryimage/Etc.svg',
  },
];
//카테고리의 확장성을 위해 서로간의 id값의 범주를 다르게 함.

const TALENT_CATEGORIES_DATA: TalentCategory[] = [
  {
    id: 101,
    name: 'All',
    categoryid: 'TALL',
    categoryimg: '/categoryimage/All.svg',
  },
  {
    id: 102,
    name: 'Tech ',
    categoryid: 'TTECH',
    categoryimg: '/categoryimage/Tech.svg',
  },
  {
    id: 103,
    name: 'Home',
    categoryid: 'THOME',
    categoryimg: '/categoryimage/Home.svg',
  },
  {
    id: 104,
    name: 'Health',
    categoryid: 'THEALTH',
    categoryimg: '/categoryimage/Health.svg',
  },
  {
    id: 105,
    name: 'Lang',
    categoryid: 'TLANG',
    categoryimg: '/categoryimage/Lang.svg',
  },
  {
    id: 106,
    name: 'Art',
    categoryid: 'TART',
    categoryimg: '/categoryimage/Art.svg',
  },
  {
    id: 107,
    name: 'etc',
    categoryid: 'TETC',
    categoryimg: '/categoryimage/Etc.svg',
  },
];
