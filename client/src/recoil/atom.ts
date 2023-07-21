import { atom, AtomOptions } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const selectedOptionAtom = atom({
  key: 'selectedOption',
  default: 'newest',
});

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const isLogInState = atom({
  key: 'isLogInState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const loginTimeState = atom({
  key: 'loginTimeState',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
