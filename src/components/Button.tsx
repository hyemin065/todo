import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #000;
  padding: 5px 10px;
`;

type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <StyledButton type='button' onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
