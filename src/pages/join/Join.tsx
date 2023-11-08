import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { JoinType, JoinErrorMessageType } from '../../type/type';
import { joinApi } from '../../api/axiosPublic';
import JoinForm from '../../components/organisms/JoinForm';

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

const JoinSuccessWrap = styled.div`
  p {
    color: #fff;
    margin-bottom: 30px;
  }

  a {
    width: 400px;
    display: block;
    padding: 22px 10px;
    height: 60px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #000;
    background-color: #ffae00;
  }
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
  const [isLoading, setIsLoading] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const inputValueChangeHandler = (key: keyof JoinType, value: string) => {
    setErrorMessage((prev) => ({ ...prev, [key]: '', error: '' }));
    setJoinValue((prev) => ({ ...prev, [key]: value }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
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

    if (joinValue.password.length < 6) {
      errorMessage.passwordConfirm = '비밀번호는 6자리 이상 입력해주세요';
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
      joinValue.password.length >= 6 &&
      joinValue.password.trim() === joinValue.passwordConfirm.trim() &&
      emailRegEx.test(joinValue.email)
    ) {
      try {
        const res = await joinApi(joinValue);
        if (res) {
          setJoinSuccess(true);
        }
      } catch (error: any) {
        setErrorMessage((prev) => ({ ...prev, error: error.message }));
      }
    }
  };

  return (
    <JoinWrap>
      {joinSuccess ? (
        <JoinSuccessWrap>
          <p> 회원가입이 완료되었습니다</p>
          <Link to='/login'>로그인</Link>
        </JoinSuccessWrap>
      ) : (
        <JoinForm
          data={joinValue}
          errorMsg={errorMessage}
          submitHandler={submitHandler}
          inputChangeHandler={inputValueChangeHandler}
        />
      )}
    </JoinWrap>
  );
};

export default Join;
