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

export type JoinPropsType = {
  alias: string;
  password: string;
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

export type LoginType = {
  id: string;
  password: string;
};

export type LoginPropsType = { alias: string; password: string };

export type UserType = { id: number; userId: string; email: string; exp: number; iat: number };
