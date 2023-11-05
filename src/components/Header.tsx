import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width:100%;
  height:50px;
  font-size:14px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>TODO</h1>
      <ul>
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/join'>join</NavLink>
      </ul>
    </StyledHeader>
  );
};

export default Header;
