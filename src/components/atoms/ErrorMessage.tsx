import styled from 'styled-components';

const StyledErrorMessage = styled.span`
  color: red;
  margin-top: 10px;
  font-size: 12px;
`;

type Props = {
  errorMsg: string;
};
const ErrorMessage = ({ errorMsg }: Props) => {
  return <StyledErrorMessage>{errorMsg}</StyledErrorMessage>;
};

export default ErrorMessage;
