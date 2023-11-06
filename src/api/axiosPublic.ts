import axios from 'axios';
import { JoinType } from '../type/type';

export const joinApi = async (params: JoinType) => {
  console.log(params);
  try {
    const res = await axios.post('http://localhost:8088/api/auth/signUp', {
      userId: params.id,
      email: params.email,
      password: params.password,
      name: params.name
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
