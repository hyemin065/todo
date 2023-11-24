import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/Login';
import Join from '../pages/join/Join';
import Todo from '../pages/todo/Todo';
import Layout from '../components/template/Layout';

const RootRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Todo />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RootRoute;
