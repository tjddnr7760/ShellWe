import {
  TALENT_CATEGORIES_DATA,
  PRODUCT_CATEGORIES_DATA,
} from '../dataset/CategoryData.ts';

function processData(data: ShellDetailData) {
  const firstChar = data.category.slice(0, 1);
  const matchingItems = (
    firstChar === 'p' ? PRODUCT_CATEGORIES_DATA : TALENT_CATEGORIES_DATA
  ).find((item) => item.categoryid === data.category);

  const extractedData = matchingItems && {
    name: matchingItems.name,
    categoryid: matchingItems.categoryid,
    type: firstChar === 'p' ? 'product' : 'talent',
  };

  const updatedData = {
    title: data.title,
    body: data.body,
    tags: data.tags?.map((tag: { tagName: string }) => tag.tagName),
    category: extractedData,
    pictures: data.pictures?.map(
      (picture: { order: number; url: string }) => picture.url
    ),
  };
  return updatedData;
}
export default processData;
interface ShellDetailData {
  id: number;
  type: string;
  title: string;
  pictures?: { order: number; url: string }[];
  body: string;
  createdAt: string;
  modifiedAt: string;
  category: string;
  tags: { tagName: string }[];
  status: string;
  member: {
    id: number;
    displayName: string;
    profileUrl: string;
    isMe: boolean;
  };
}
