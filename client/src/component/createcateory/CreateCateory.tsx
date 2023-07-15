import { useEffect, useState } from 'react';

import {
  CreateCateoryWrapper,
  CategoryMenuImg,
  CategoryMenuText,
  CategoryDropdown,
  CategoryItem,
  CategoryText,
  CategoryMenuWrapper,
} from './CreateCateory.styled.ts';
import {
  PRODUCT_CATEGORIES_DATA,
  TALENT_CATEGORIES_DATA,
} from '../../dataset/CategoryData.ts';
import CategoryMenu from '../../asset/categorymenu/CategoryMenu.svg';

interface CategoryType {
  name: string;
  categoryid: string;
  id: number;
}
interface CreateCateoryProps {
  selectedCateory: {
    name: string;
    categoryid: string;
    type: string;
  };
  setSelectedCateory: (category: {
    name: string;
    categoryid: string;
    type: string;
  }) => void;
}

const CreateCateory = ({
  selectedCateory,
  setSelectedCateory,
}: CreateCateoryProps) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const handleClickMenuOpen = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const handleClickChangeCategery = (item: CategoryType, itemType: string) => {
    setSelectedCateory({
      name: item.name,
      categoryid: item.categoryid,
      type: itemType,
    });
  };

  return (
    <CreateCateoryWrapper onClick={handleClickMenuOpen}>
      <CategoryMenuWrapper>
        <CategoryMenuImg src={CategoryMenu} />
        <CategoryMenuText>{selectedCateory.name}</CategoryMenuText>
      </CategoryMenuWrapper>
      {isOpenCategory && (
        <CategoryDropdown>
          <CategoryText>Product</CategoryText>
          {PRODUCT_CATEGORIES_DATA.map((item: CategoryType) => {
            if (item.name !== 'All') {
              return (
                <CategoryItem
                  key={item.id}
                  onClick={() => handleClickChangeCategery(item, 'product')}
                >
                  {item.name}
                </CategoryItem>
              );
            }
          })}
          <CategoryText>Talent</CategoryText>
          {TALENT_CATEGORIES_DATA.map((item: CategoryType) => {
            if (item.name !== 'All') {
              return (
                <CategoryItem
                  key={item.id}
                  onClick={() => handleClickChangeCategery(item, 'talent')}
                >
                  {item.name}
                </CategoryItem>
              );
            }
          })}
        </CategoryDropdown>
      )}
    </CreateCateoryWrapper>
  );
};

export default CreateCateory;
