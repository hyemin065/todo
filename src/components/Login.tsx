import styled from 'styled-components';
import Button from './Button';
import { useState, ChangeEvent } from 'react';
import FormGroup from './FormGroup';

const LoginWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > form {
    width: 400px;
  }
`;

type LoginType = {
  id: string;
  password: string;
};

const Login = () => {
  const [loginValue, setLoginValue] = useState<LoginType>({
    id: '',
    password: ''
  });

  const inputValueChangeHandler = (key: keyof LoginType, value: string) => {
    setLoginValue((prev) => ({ ...prev, [key]: value }));
  };

  const onClick = () => {};
  const submitHandler = () => {};

  return (
    <LoginWrap>
      <form onSubmit={submitHandler}>
        <FormGroup
          id='id'
          label='ID'
          value={loginValue.id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputValueChangeHandler('id', e.currentTarget.value)}
        />

        <FormGroup
          id='password'
          label='password'
          type='password'
          value={loginValue.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputValueChangeHandler('password', e.currentTarget.value)}
        />

        <Button onClick={onClick}>로그인</Button>
      </form>
    </LoginWrap>
  );
};
export default Login;
