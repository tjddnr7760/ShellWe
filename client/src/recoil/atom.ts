import { atom } from 'recoil';

export const catagoryState = atom({
  key: 'catagoryState',
  default: '',
});

export const shellPageState = atom({
  key: 'shellPageState',
  default: '',
});

export const isLogInState = atom({
  key: 'isLogInState',
  default: false,
});
