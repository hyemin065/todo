import styled from 'styled-components';
import Button from './Button';

const LoginWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    width: 500px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  label {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
  input {
    border-bottom: 1px solid #fff;
    width: 100%;
    height: 40px;
  }
`;

const Login = () => {
  const onClick = () => {};
  const submitHandler = () => {};

  return (
    <LoginWrap>
      <form onSubmit={submitHandler}>
        <FormGroup>
          <label htmlFor=''>ID</label>
          <input type='text' />
        </FormGroup>

        <FormGroup>
          <label htmlFor=''>password</label>
          <input type='password' />
        </FormGroup>

        <Button text='로그인' onClick={onClick} />
      </form>
    </LoginWrap>
  );
};
export default Login;
