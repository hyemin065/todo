import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userState } from '../../store/login';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Button from '../atoms/Button';
import { getLocalStorageToken } from '../../utils';
import { JwtUserInfoType } from '../../type/user';

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
  width: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li {
    text-align: right;
    color: #fff;
    margin-left: 20px;
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
  const { userInfo, setUserInfo } = userState();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getLocalStorageToken();
    if (token) {
      const user: JwtUserInfoType = jwtDecode(token?.accessToken);
      setUserInfo(user);
    }
  }, [setUserInfo]);

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setUserInfo({ id: 0, alias: '', email: '', exp: 0, iat: 0 });
    alert('로그아웃 되었습니다');
    navigate('/');
  };

  return (
    <StyledHeader>
      <h1>
        <Link to="/">TODO</Link>
      </h1>
      <Nav>
        {userInfo?.alias ? (
          <>
            <li>{`${userInfo.alias}님 안녕하세요`}</li>
            <li>
              <Button onClick={logoutHandler}>Logout</Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/join" className={({ isActive }) => (isActive ? 'active' : '')}>
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
