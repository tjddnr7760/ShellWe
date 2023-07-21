import { selector } from 'recoil';
import { isLogInState, loginTimeState } from './atom';

export const userStateWithExpiry = selector({
  key: 'userStateWithExpiry',
  get: ({ get }) => {
    const isLoggedIn = get(isLogInState);
    const loginTime = get(loginTimeState);
    const now = Date.now();

    if (isLoggedIn && now - loginTime > 6 * 60 * 60 * 1000) {
      localStorage.removeItem('recoil-persist');
      return false;
    }

    return isLoggedIn;
  },
  set: ({ set }, newValue) => {
    if (newValue) {
      set(loginTimeState, Date.now());
    } else {
      set(loginTimeState, 0);
    }

    set(isLogInState, newValue);
  },
});
