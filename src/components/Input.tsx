import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  type?: string;
  id?: string;
  value: string;
  className?: string;
  onChange: (v: ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
  height: 40px;
  color: #fff;
  width: 100%;

  &.error {
    border-bottom: 1px solid red;
  }
`;

const Input = ({ type = 'text', id, value, className, onChange }: Props) => {
  return <StyledInput className={className} type={type} id={id} value={value} onChange={onChange} />;
};

export default Input;
