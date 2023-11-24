import { JoinPropsType, LoginPropsType } from '../type/type';
import { axiosInstance } from './instance';

export const joinApi = async (params: JoinPropsType) => {
  try {
    const res = await axiosInstance.post(`/api/auth/signUp`, params);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error);
  }
};
export const loginApi = async (params: LoginPropsType) => {
  try {
    const res = await axiosInstance.post(`/api/auth/login`, params);
    return res.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error);
  }
};

export const updateAccessToken = async (refreshToken: string) => {
  try {
    const res = await axiosInstance.get(`/api/auth/accessToken`, {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error);
  }
};
