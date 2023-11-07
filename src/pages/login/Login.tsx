import { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import InputGroup from '../../components/molecules/InputGroup';
import Button from '../../components/atoms/Button';

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
        <InputGroup
          id='id'
          label='ID'
          value={loginValue.id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputValueChangeHandler('id', e.currentTarget.value)}
        />

        <InputGroup
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
