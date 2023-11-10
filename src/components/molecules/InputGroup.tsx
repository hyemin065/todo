import { ChangeEvent } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import ErrorMessage from '../atoms/ErrorMessage';

const FormInputGroup = styled.div`
  margin-bottom: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  label {
    font-size: 14px;
    color: #eff1ff;
    margin-bottom: 10px;
    width: 100%;
    text-transform: uppercase;
  }
`;

type Props = {
  id?: string;
  label?: string;
  type?: any;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
};

const InputGroup = ({ id, label, type, value, onChange, errorMessage }: Props) => {
  return (
    <FormInputGroup>
      {label && <label htmlFor='id'>{label}</label>}
      <Input type={type} value={value} id={id} onChange={onChange} className={errorMessage && 'error'} />
      {errorMessage !== '' && errorMessage && <ErrorMessage errorMsg={errorMessage}></ErrorMessage>}
    </FormInputGroup>
  );
};
export default InputGroup;
