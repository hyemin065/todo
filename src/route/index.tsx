import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import App from '../App';
import Login from '../components/Login';
import Join from '../components/Join';

const RootRoute = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='login' element={<Login />} />
          <Route path='join' element={<Join />} />
        </Routes>
      </Router>
    </>
  );
};

export default RootRoute;
