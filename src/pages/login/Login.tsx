import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import InputGroup from '../../components/molecules/InputGroup';
import Button from '../../components/atoms/Button';
import { LoginType, JwtUserInfoType } from '../../type/user';
import { loginApi } from '../../api/axiosPublic';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { userState } from '../../store/login';
import ErrorMessage from '../../components/atoms/ErrorMessage';

const LoginWrap = styled.section`
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

const LoginErrorMessage = styled(ErrorMessage)`
  margin-bottom: 20px;
`;

const Login = () => {
  const [loginValue, setLoginValue] = useState<LoginType>({
    id: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState({ id: '', password: '', error: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { setUserInfo } = userState();
  const navigate = useNavigate();

  const inputValueChangeHandler = (key: keyof LoginType, value: string) => {
    setErrorMessage((prev) => ({ ...prev, [key]: '', error: '' }));
    setLoginValue((prev) => ({ ...prev, [key]: value }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginValue.id.trim() === '') {
      setErrorMessage((prev) => ({ ...prev, id: '값을 입력해주세요' }));
      return;
    }

    if (loginValue.password.trim() === '') {
      setErrorMessage((prev) => ({ ...prev, password: '값을 입력해주세요' }));
      return;
    }

    try {
      setIsLoading(true);
      const res = await loginApi({ alias: loginValue.id, password: loginValue.password });
      if (res) {
        localStorage.setItem('token', JSON.stringify(res.token));
        const user: JwtUserInfoType = jwtDecode(res.token.accessToken);
        setUserInfo(user);
        alert('로그인 되었습니다.');
        navigate('/');
      }
    } catch (error: any) {
      setErrorMessage((prev) => ({ ...prev, error: error.message }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginWrap>
      <form onSubmit={submitHandler}>
        <InputGroup
          id="id"
          label="ID"
          value={loginValue.id}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            inputValueChangeHandler('id', e.currentTarget.value)
          }
          errorMessage={errorMessage.id}
        />

        <InputGroup
          id="password"
          label="password"
          type="password"
          value={loginValue.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            inputValueChangeHandler('password', e.currentTarget.value)
          }
          errorMessage={errorMessage.password}
        />

        <LoginErrorMessage errorMsg={errorMessage.error} />
        <Button className="success" isLoading={isLoading}>
          로그인
        </Button>
      </form>
    </LoginWrap>
  );
};
export default Login;
