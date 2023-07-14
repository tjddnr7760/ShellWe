import { atom } from 'recoil';

export const selectedOptionAtom = atom({
  key: 'selectedOption',
  default: 'newest',
});

export const isLogInState = atom({
  key: 'isLogInState',
  default: false,
});
