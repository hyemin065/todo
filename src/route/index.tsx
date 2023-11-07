import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/organisms/Header';
import Login from '../pages/login/Login';
import Join from '../pages/join/Join';
import Todo from '../pages/todo/Todo';

const RootRoute = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='login' element={<Login />} />
          <Route path='join' element={<Join />} />
        </Routes>
      </Router>
    </>
  );
};

export default RootRoute;
