import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: '',
});
export const selectedOptionAtom = atom({
  key: 'selectedOption',
  default: 'newest',
});

export const isLogInState = atom({
  key: 'isLogInState',
  default: false,
});
