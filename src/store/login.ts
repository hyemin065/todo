import { create } from 'zustand';
import { JwtUserInfoType } from '../type/user';

type userInfoType = {
  userInfo: JwtUserInfoType;
  setUserInfo: (value: JwtUserInfoType) => void;
};

export const userState = create<userInfoType>((set) => ({
  userInfo: { id: 0, alias: '', email: '', exp: 0, iat: 0 },
  setUserInfo: (newValue: JwtUserInfoType) => set({ userInfo: newValue }),
}));
