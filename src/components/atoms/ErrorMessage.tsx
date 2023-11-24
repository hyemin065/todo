import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 12px;
`;

type Props = {
  errorMsg: string;
  className?: string;
};
const ErrorMessage = ({ errorMsg, className }: Props) => {
  return <StyledErrorMessage className={className}>{errorMsg}</StyledErrorMessage>;
};

export default ErrorMessage;
