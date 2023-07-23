import axios from 'axios';
import { useQueries } from 'react-query';

import { v4 as uuidv4 } from 'uuid';
import { queryKeys } from '../../dataset/queryKey';

const getImageFile = async (imageUrl: string) => {
  const newUrl = imageUrl.slice(0, 4) + imageUrl.slice(5);
  const response = await axios.get(newUrl, {
    responseType: 'blob',
  });

  const blob = new Blob([response.data], {
    type: response.headers['content-type'],
  });
  const file = new File([blob], `${uuidv4()}.jpg`, { type: blob.type });
  return file;
};
export const useImageUpload = (updateInitalImages: string[]) => {
  console.log(updateInitalImages);
  const queryResults = useQueries(
    updateInitalImages.map((imageUrl) => ({
      queryKey: ['convert to image file', queryKeys.imageData, imageUrl],
      queryFn: () => {
        return getImageFile(imageUrl);
      },
      enabled: !!imageUrl,
    })) as readonly { queryKey: string[]; queryFn: () => Promise<File> }[]
  );

  const s3UploadImages = queryResults
    ?.filter(
      (queryResult) =>
        queryResult.status === 'success' && Boolean(queryResult.data)
    )
    ?.map((queryResult) => queryResult.data);

  return s3UploadImages;
};
