import { atom, AtomOptions } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const selectedOptionAtom = atom({
  key: 'selectedOption',
  default: 'newest',
});

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // 로컬스토리지에 저장될 키의 이름
  storage: localStorage, // 사용할 스토리지 지정 (localStorage 또는 sessionStorage)
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
