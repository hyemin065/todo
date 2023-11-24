import { JoinErrorMessageType, JoinType } from '../type/type';

export const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const isValidate = (value: JoinType, errorMessage: JoinErrorMessageType) => {
  errorMessage.error = '';

  if (value.id.trim() === '') {
    errorMessage.id = '아이디를 입력해주세요';
  }

  if (value.password.trim() === '') {
    errorMessage.password = '비밀번호를 입력해주세요';
  } else if (value.password.length < 6) {
    errorMessage.password = '비밀번호는 6자리 이상 입력해주세요';
  }

  if (value.passwordConfirm.trim() === '' || value.password !== value.passwordConfirm) {
    errorMessage.passwordConfirm = '비밀번호를 확인해주세요';
  }

  if (value.email.trim() === '' || !emailRegEx.test(value.email)) {
    errorMessage.email = '이메일을 확인해주세요';
  }

  if (value.name.trim() === '') {
    errorMessage.name = '이름을 확인해주세요';
  }

  return Object.values(errorMessage).every((errors) => errors === '') ? '' : errorMessage;
};

export const getLocalStorageToken = () => {
  const token = localStorage.getItem('token') || '';
  if (token) {
    const { accessToken, refreshToken } = JSON.parse(token);
    return { accessToken, refreshToken };
  }
  return null;
};
