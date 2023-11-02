import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (v: string) => void;
};

const StyledInput = styled.input`
  height: 30px;
`;

const Input = ({ value, onChange }: Props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    onChange(value);
  };

  return <StyledInput type='text' value={value} onChange={onChangeHandler} />;
};

export default Input;
