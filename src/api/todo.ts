import { AddTodoPropsType, EditTodoPropsType } from '../type/todo';
import { instance } from './interceptors';

export const getTodosApi = async (id: number) => {
  try {
    const res = await instance.get(`/api/todos/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error);
  }
};

export const addTodoApi = async (params: AddTodoPropsType) => {
  try {
    const res = await instance.post('/api/todos/create', {
      title: params.title,
      user_Id: params.userId,
      contentId: params.contentId,
      success: params.success,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error);
  }
};

export const editTodoApi = async (params: EditTodoPropsType) => {
  try {
    const res = await instance.patch('/api/todos/update', {
      id: params.id,
      title: params.title,
      contentId: params.contentId,
      success: params.success,
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error);
  }
};

export const deleteTodoApi = async (id: number) => {
  try {
    const res = await instance.delete(`api/todos/delete/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error);
  }
};

//content 가져오기
// export const getContentsApi = async (id: number) => {
//   try {
//     const res = await instance.delete(`api/todos/delete/${id}`);
//     return res.data;
//   } catch (error: any) {
//     throw new Error(error?.response?.data?.message || error);
//   }
// };
