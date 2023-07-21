export const getMemberIdFromLocalStorage = () => {
  const memberId = localStorage.getItem('id');
  return memberId;
};
export const getDisplayNameFromLocalStorage = () => {
  const displayname = localStorage.getItem('displayName');
  return displayname;
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken;
};
