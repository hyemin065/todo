//join
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

//login
export type LoginType = {
  id: string;
  password: string;
};

export type LoginPropsType = { alias: string; password: string };

//user
export type JwtUserInfoType = {
  id: number;
  alias: string;
  email: string;
  exp: number;
  iat: number;
};

export type UserType = {
  alias: string;
  email: string;
  name: string;
};
