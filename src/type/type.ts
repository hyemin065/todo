export type Todos = {
  id: number;
  title: string;
  isEdit: boolean;
};

export type JoinType = {
  id: string;
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
};

export type JoinErrorMessageType = {
  id: string;
  password: string;
  passwordConfirm: string;
  email: string;
  name: string;
  error: string;
};
