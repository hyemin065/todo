import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(239, 241, 255, 0.1);
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 16px;
    a {
      color: #fff;
    }
  }
`;

const Nav = styled.ul`
  width: 160px;
  display: flex;
  justify-content: space-between;
  li {
    width: 50%;
    text-align: right;
    a {
      color: #fff;
      font-size: 16px;
      &.active {
        color: #ffae00;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to='/'>TODO</Link>
      </h1>
      <Nav>
        <li>
          <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : '')}>
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to='/join' className={({ isActive }) => (isActive ? 'active' : '')}>
            Sign Up
          </NavLink>
        </li>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
