import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  value: string;
  setValue: (v: string) => void;
};

const StyledInput = styled.input`
  height: 30px;
`;

const Input = ({ value, setValue }: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  return <StyledInput type='text' value={value} onChange={onChangeHandler} />;
};

export default Input;
