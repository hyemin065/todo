import { create } from 'zustand';
import { UserType } from '../type/type';

type userInfoType = {
  userInfo: UserType;
  setUserInfo: (value: UserType) => void;
};

export const userState = create<userInfoType>((set) => ({
  userInfo: { id: 0, userId: '', email: '', exp: 0, iat: 0 },
  setUserInfo: (newValue: UserType) => set({ userInfo: newValue }),
}));
