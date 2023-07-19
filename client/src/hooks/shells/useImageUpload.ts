import axios from 'axios';
import { FileWithPath } from 'react-dropzone';
import { QueryObserverResult, useQueries, useQuery } from 'react-query';

import { v4 as uuidv4 } from 'uuid';
import { queryKeys } from '../../dataset/queryKey';

const getImageFile = async (imageUrl: string) => {
  const response = await axios.get(imageUrl, {
    responseType: 'blob',
  });
  console.log('response', response);

  const blob = new Blob([response.data], {
    type: response.headers['content-type'],
  });
  const file = new File([blob], `${uuidv4()}.jpg`, { type: blob.type });
  return file;
};
export const useImageUpload = (updateInitalImages: string[]) => {
  console.log('re ca');

  const queryResults = useQueries(
    updateInitalImages.map((imageUrl) => ({
      queryKey: ['convert to image file', imageUrl],
      queryFn: () => {
        console.log('re calling api with', imageUrl);
        return getImageFile(imageUrl);
      },
    })) as readonly { queryKey: string[]; queryFn: () => Promise<File> }[]
  );
  const s3UploadImages = queryResults
    ?.filter((queryResult) => Boolean(queryResult.data))
    ?.map((queryResult) => queryResult.data);
  return s3UploadImages;
};
