import styled from 'styled-components';
import Header from '../organisms/Header';
import { Outlet } from 'react-router-dom';

const Main = styled.main`
  height: calc(100vh - 70px);
`;

const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
export default Layout;
