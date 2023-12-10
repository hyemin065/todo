import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { JoinType, JoinErrorMessageType } from '../../type/user';
import { joinApi } from '../../api/axiosPublic';
import JoinForm from '../../components/organisms/JoinForm';
import { isValidate } from '../../utils';

const JoinWrap = styled.section`
  width: 100%;
  height: 100%;
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

const Join = () => {
  const [joinValue, setJoinValue] = useState<JoinType>({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    name: '',
  });

  const [errorMessage, setErrorMessage] = useState<JoinErrorMessageType>({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    name: '',
    error: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);

  const inputValueChangeHandler = (key: keyof JoinType, value: string) => {
    setErrorMessage((prev) => ({ ...prev, [key]: '', error: '' }));
    setJoinValue((prev) => ({ ...prev, [key]: value }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = isValidate(joinValue, errorMessage);

    if (validationError) {
      setErrorMessage((prev) => ({ ...prev, ...validationError }));
      return;
    }

    try {
      setIsLoading(true);
      await joinApi({
        alias: joinValue.id,
        email: joinValue.email,
        password: joinValue.password,
        name: joinValue.name,
      });

      setJoinSuccess(true);
    } catch (error: any) {
      setErrorMessage((prev) => ({ ...prev, error: error.message }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <JoinWrap>
      {joinSuccess ? (
        <JoinSuccessWrap>
          <p> 회원가입이 완료되었습니다</p>
          <Link to="/login">로그인</Link>
        </JoinSuccessWrap>
      ) : (
        <JoinForm
          data={joinValue}
          errorMsg={errorMessage}
          submitHandler={submitHandler}
          inputChangeHandler={inputValueChangeHandler}
          isLoading={isLoading}
        />
      )}
    </JoinWrap>
  );
};

export default Join;
