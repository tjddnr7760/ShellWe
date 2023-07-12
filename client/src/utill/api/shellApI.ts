export const shellDefaultAPI = () => {
  return `/shells`;
};
export const shellDetailAPI = (id: number) => {
  return `${shellDefaultAPI}/${id}`;
};
