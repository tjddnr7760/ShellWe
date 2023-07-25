export const moveItemToStart = <T>(array: T[], index: number): T[] => {
  const updatedArray = [...array];
  const selectedItem = updatedArray[index];
  updatedArray.splice(index, 1);
  updatedArray.unshift(selectedItem); // 선택한 항목을 0번 인덱스로 이동
  return updatedArray;
};
