export const GoogleLogin = () => {
  window.location.href = `${
    import.meta.env.VITE_KEY
  }/oauth2/authorization/google`;
};
