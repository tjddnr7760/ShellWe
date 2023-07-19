export const getMemberIdFromLocalStorage = () => {
  const memberId = Number(localStorage.getItem('id'));
  return memberId;
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('Authorization');
  return accessToken;
};
