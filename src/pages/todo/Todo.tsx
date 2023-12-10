import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { testApi } from '../../api/axiosPublic';
import { getTodosApi } from '../../api/todo';
import { userState } from '../../store/login';
import AddTodoGroup from '../../components/molecules/AddTodoGroup';
import TodoListGroup from '../../components/organisms/TodoListGroup';

const TodoWrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoContainer = styled.div`
  width: 700px;
  background-color: #ddd;
  padding: 30px;

  h1 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

function Todo() {
  const { userInfo } = userState();
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const [testData, setTestData] = useState('');
  const [testError, setTestError] = useState('');

  const getTodos = async () => {
    try {
      const res = await getTodosApi(userInfo.id);
      setTodos(res);
      setEditId(0);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const test = async () => {
    try {
      const test = await testApi();
      setTestData(test);
    } catch (error: any) {
      setTestError(error.message);
    }
  };

  useEffect(() => {
    test();
  }, []);

  useEffect(() => {
    if (userInfo.id !== 0) {
      getTodos();
    }
  }, [userInfo]);

  return (
    <TodoWrap>
      <TodoContainer>
        <h1>TODO</h1>
        <p>{testData ? testData : testError}</p>

        <TodoListGroup todos={todos} editId={editId} setEditId={setEditId} getTodos={getTodos} />

        <AddTodoGroup userInfo={userInfo} getTodos={getTodos} />
      </TodoContainer>

      <Toaster position="top-center" reverseOrder={false} />
    </TodoWrap>
  );
}

export default Todo;
