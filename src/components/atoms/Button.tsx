import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 10px;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;

  &.success {
    background-color: #ffae00;
    font-size: 16px;
    font-weight: bold;
    color: #000;
  }

  &:disabled {
    background-color: #757575;
    cursor: no-drop;
    font-size: 16px;
    font-weight: bold;
  }
`;

type Props = {
  className?: string;
  buttonType?: 'button' | 'submit' | 'reset';
  buttonStyle?: string;
  isLoading?: boolean;
  children: string | JSX.Element | JSX.Element[];
  onClick?: () => void;
};

const Button = ({ buttonType = 'submit', className, isLoading, onClick, children }: Props) => {
  return (
    <StyledButton type={buttonType} className={className} onClick={onClick} disabled={isLoading}>
      {isLoading ? '로딩중' : children}
    </StyledButton>
  );
};

export default Button;
