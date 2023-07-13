import { atom } from 'recoil';

export const catagoryState = atom<string>({
  key: 'catagoryState',
  default: (pageType: string) => {
    if (pageType === 'product') {
      return 'p_all';
    } else if (pageType === 'talent') {
      return 't_all';
    } else {
      return '';
    }
  },
});

export const shellPageState = atom<string>({
  key: 'shellPageState',
  default: (pageType: string) => {
    if (pageType === 'product') {
      return 'product';
    } else if (pageType === 'talent') {
      return 'talent';
    } else {
      return '';
    }
  },
});
