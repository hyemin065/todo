import { UserType } from './user';

export type TodosType = {
  id: number;
  title: string;
  success: number;
  contentId: number;
  user_id: number;
  user: UserType;
};

export type TodoContentsIdType<T> = { id: number; title: T };

export type EditContentsType = { title: string; id: number; success: number };

export type AddTodoPropsType = {
  title: string;
  userId: number;
  contentId: number;
  success: number;
};

export type EditTodoPropsType = { id: number; title: string; contentId: number; success: number };
