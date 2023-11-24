import { ChangeEvent } from 'react';
import styled from 'styled-components';
import InputGroup from '../molecules/InputGroup';
import ErrorMessage from '../atoms/ErrorMessage';
import Button from '../atoms/Button';
import { JoinErrorMessageType, JoinType } from '../../type/type';

const JoinErrorMessage = styled(ErrorMessage)`
  margin-bottom: 20px;
`;

type Props = {
  data: JoinType;
  errorMsg: JoinErrorMessageType;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  inputChangeHandler: (key: keyof JoinType, value: string) => void;
  isLoading: boolean;
};

const JoinForm = ({ data, errorMsg, submitHandler, inputChangeHandler, isLoading }: Props) => {
  return (
    <form onSubmit={submitHandler}>
      <InputGroup
        id="id"
        label="id"
        value={data.id}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          inputChangeHandler('id', e.currentTarget.value)
        }
        errorMessage={errorMsg.id}
      />

      <InputGroup
        id="password"
        label="password"
        type="password"
        value={data.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          inputChangeHandler('password', e.currentTarget.value)
        }
        errorMessage={errorMsg.password}
      />

      <InputGroup
        id="passwordConfirm"
        label="password confirm"
        type="password"
        value={data.passwordConfirm}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          inputChangeHandler('passwordConfirm', e.currentTarget.value)
        }
        errorMessage={errorMsg.passwordConfirm}
      />

      <InputGroup
        id="email"
        label="email"
        value={data.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          inputChangeHandler('email', e.currentTarget.value)
        }
        errorMessage={errorMsg.email}
      />

      <InputGroup
        id="name"
        label="name"
        value={data.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          inputChangeHandler('name', e.currentTarget.value)
        }
        errorMessage={errorMsg.name}
      />

      {errorMsg.error !== '' && <JoinErrorMessage errorMsg={errorMsg.error} />}
      <Button className="success" isLoading={isLoading}>
        회원가입
      </Button>
    </form>
  );
};

export default JoinForm;
