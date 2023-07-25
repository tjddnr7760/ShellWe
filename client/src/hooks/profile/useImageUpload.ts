import axios from 'axios';
import { useQuery } from 'react-query';

import { v4 as uuidv4 } from 'uuid';
import { queryKeys } from '../../dataset/queryKey';

const getImageFile = async (imageUrl: string) => {
  const response = await axios.get(imageUrl, {
    responseType: 'blob',
  });

  const blob = new Blob([response.data], {
    type: response.headers['content-type'],
  });
  const file = new File([blob], `${uuidv4()}.jpg`, { type: blob.type });
  return file;
};
export const useImageUpload = (updateInitalImages: string) => {
  const { data } = useQuery([queryKeys.imageData, updateInitalImages], () =>
    getImageFile(updateInitalImages)
  );
  return data;
};
