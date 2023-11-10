import axios from 'axios';
import { JoinPropsType } from '../type/type';

export const joinApi = async (params: JoinPropsType) => {
  try {
    const res = await axios.post('http://localhost:8088/api/auth/signUp', params);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error);
  }
};
