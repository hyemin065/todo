import { ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (v: ChangeEvent<HTMLInputElement>) => void;
};

const StyledInput = styled.input`
  height: 30px;
`;

const Input = ({ value, onChange }: Props) => {
  return <StyledInput type='text' value={value} onChange={onChange} />;
};

export default Input;
