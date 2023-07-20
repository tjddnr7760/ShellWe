export const compareFiles = (
  fileA: File,
  fileB: File
): Promise<boolean> | boolean => {
  // 파일을 비교하는 로직을 구현합니다.
  // 예를 들어, 파일의 데이터나 특정 속성을 비교하여 같은 파일인지 확인할 수 있습니다.

  return fileA.size === fileB.size && compareFileData(fileA, fileB);
};

const compareFileData = (fileA: File, fileB: File): Promise<boolean> => {
  // 파일의 데이터 비교 로직을 구현합니다.
  // 파일 데이터를 비교하여 같은 파일인지 확인하는 방식은 파일의 형식에 따라 다를 수 있습니다.

  // 이 예제에서는 파일의 데이터(byte)를 문자열로 변환하여 비교합니다.
  const readerA = new FileReader();
  const readerB = new FileReader();

  return new Promise<boolean>((resolve) => {
    readerA.onloadend = () => {
      readerB.onloadend = () => {
        resolve(readerA.result === readerB.result);
      };

      readerB.readAsText(fileB);
    };

    readerA.readAsText(fileA);
  });
};
