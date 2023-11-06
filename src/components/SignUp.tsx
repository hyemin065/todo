import styled from 'styled-components';
import Button from './Button';
import { useState, ChangeEvent } from 'react';
import FormGroup from './FormGroup';
import { JoinType, JoinErrorMessageType } from '../type/type';
import { joinApi } from '../api/axiosPublic';

const JoinWrap = styled.section`
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

const JoinErrorMessage = styled.p`
  color: red;
  margin-bottom: 20px;
  font-size: 12px;
`;

const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const Join = () => {
  const [joinValue, setJoinValue] = useState<JoinType>({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    name: ''
  });

  const [errorMessage, setErrorMessage] = useState<JoinErrorMessageType>({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    name: '',
    error: ''
  });

  const inputValueChangeHandler = (key: keyof JoinType, value: string) => {
    setErrorMessage((prev) => ({ ...prev, [key]: '', error: '' }));
    setJoinValue((prev) => ({ ...prev, [key]: value }));
  };

  const onClick = () => {};

  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (joinValue.id.trim() === '') {
      errorMessage.id = '아이디를 입력해주세요';
    }

    if (joinValue.password.trim() === '') {
      errorMessage.password = '비밀번호를 입력해주세요';
    }

    if (joinValue.passwordConfirm.trim() === '') {
      errorMessage.passwordConfirm = '비밀번호를 확인해주세요';
    }

    if (joinValue.email.trim() === '') {
      errorMessage.email = '이메일을 입력해주세요';
    }

    if (joinValue.name.trim() === '') {
      errorMessage.name = '이름을 입력해주세요';
    }

    if (joinValue.password !== joinValue.passwordConfirm) {
      errorMessage.passwordConfirm = '비밀번호를 확인해주세요';
    }
    if (!emailRegEx.test(joinValue.email)) {
      errorMessage.email = '이메일을 확인해주세요';
    }
    setErrorMessage((prev) => ({ ...prev, ...errorMessage }));

    if (
      joinValue.id.trim() !== '' &&
      joinValue.password.trim() !== '' &&
      joinValue.passwordConfirm.trim() !== '' &&
      joinValue.email.trim() !== '' &&
      joinValue.name.trim() !== '' &&
      joinValue.password.trim() === joinValue.passwordConfirm.trim() &&
      emailRegEx.test(joinValue.email)
    ) {
      try {
        const res = await joinApi(joinValue);
        alert(res.message);
      } catch (error: any) {
        setErrorMessage((prev) => ({ ...prev, error: error.message }));
      }
    }
  };

  return (
    <JoinWrap>
      <form onSubmit={submitHandler}>
        <FormGroup
          id='id'
          label='id'
          value={joinValue.id}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputValueChangeHandler('id', e.currentTarget.value)}
          errorMessage={errorMessage.id}
        />

        <FormGroup
          id='password'
          label='password'
          type='password'
          value={joinValue.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputValueChangeHandler('password', e.currentTarget.value)}
          errorMessage={errorMessage.password}
        />

        <FormGroup
          id='passwordConfirm'
          label='password confirm'
          type='password'
          value={joinValue.passwordConfirm}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            inputValueChangeHandler('passwordConfirm', e.currentTarget.value)
          }
          errorMessage={errorMessage.passwordConfirm}
        />

        <FormGroup
          id='email'
          label='email'
          value={joinValue.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputValueChangeHandler('email', e.currentTarget.value)}
          errorMessage={errorMessage.email}
        />

        <FormGroup
          id='name'
          label='name'
          value={joinValue.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputValueChangeHandler('name', e.currentTarget.value)}
          errorMessage={errorMessage.name}
        />

        <JoinErrorMessage>{errorMessage.error}</JoinErrorMessage>
        <Button onClick={onClick}>회원가입</Button>
      </form>
    </JoinWrap>
  );
};

export default Join;
