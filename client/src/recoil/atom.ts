import { atom } from 'recoil';

export const selectedOptionAtom = atom({
  key: 'selectedOption',
  default: 'newest',
});
