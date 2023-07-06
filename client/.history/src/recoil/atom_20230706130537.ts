import { atom } from 'recoil';

export const catagoryState = atom<string>({
  key: 'catagoryState',
  default: '',
});

export const shellPageState = atom<string>({
  key: 'shellPageState',
  default: '',
});
