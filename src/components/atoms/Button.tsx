import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 10px;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;

  &.success {
    background-color: #ffae00;
  }

  &:disabled {
    background-color: #757575;
    cursor: no-drop;
  }
`;

type Props = {
  isLoading?: boolean;
  type?: string;
  children: string | JSX.Element | JSX.Element[];
  onClick?: () => void;
};

const Button = ({ type = 'success', isLoading, onClick, children }: Props) => {
  return (
    <StyledButton className={type} onClick={onClick} disabled={isLoading}>
      {isLoading ? '로딩중' : children}
    </StyledButton>
  );
};

export default Button;
