import { atom } from 'recoil';

export const testState = atom<string | undefined>({
  key: 'test',
  default: '',
});
