import { create } from 'zustand';
import { UserType } from '../type/type';

type userInfoType = {
  userInfo: UserType;
  setUserInfo: (value: any) => void;
};

export const userState = create<userInfoType>((set) => ({
  userInfo: { id: 0, userId: '', email: '', exp: 0, iat: 0 },
  setUserInfo: (newValue: any) => set({ userInfo: newValue }),
}));
