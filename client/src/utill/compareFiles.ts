export const compareFiles = (
  fileA: File,
  fileB: File
): Promise<boolean> | boolean => {
  return fileA.size === fileB.size && compareFileData(fileA, fileB);
};

const compareFileData = (fileA: File, fileB: File): Promise<boolean> => {
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
