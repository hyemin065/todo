import { ChangeEvent, useState } from 'react';
import Input from './components/Input';
import { TodoArr } from './type/type';
import Button from './components/Button';
import styled from 'styled-components';

const TodoWrap = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoBox = styled.div`
  width: 500px;
  background-color: #ddd;
  padding: 30px;

  h1 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const TodoList = styled.ul`
  margin-bottom: 30px;
  width: 100%;

  li {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      width: 70%;
    }
  }
`;

const ButtonWrap = styled.div`
  width: calc(100% - 70% - 10px);
  margin-left: 10px;
  text-align: right;

  button {
    padding: 5px 10px;
    &:last-child {
      margin-left: 10px;
    }
  }
`;

const TodoInputWrap = styled.div`
  width: 100%;
  input {
    width: 80%;
  }
  button {
    margin-left: 10px;
    width: calc(100% - 80% - 10px);
  }
`;

function App() {
  const [todoInputValue, setTodoInputValue] = useState('');
  const [todoArr, setTodoArr] = useState<TodoArr[]>([]);
  const [editInputValue, setEditInputValue] = useState('');

  const addHandler = () => {
    if (todoInputValue === '') return alert('값을 입력해주세요');

    setTodoArr((prev) => [...prev, { id: todoInputValue, title: todoInputValue, isEdit: false }]);
    setTodoInputValue('');
  };

  const confirmHandler = (item: TodoArr) => {
    const res = todoArr.map((i) => {
      return i.id === item.id ? { ...item, title: editInputValue, isEdit: false } : { ...i };
    });
    setTodoArr(res);
  };

  const editHandler = (item: TodoArr) => {
    const res = todoArr.map((i) => {
      return i.id === item.id ? { ...item, isEdit: true } : { ...i };
    });
    setTodoArr(res);
    setEditInputValue(item.title);
  };

  const deleteHandler = (id: string) => {
    const res = todoArr.filter((item) => id !== item.id);
    setTodoArr(res);
  };

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setEditInputValue(value);
  };

  return (
    <TodoWrap>
      <TodoBox>
        <h1>TODO</h1>

        <TodoList>
          {todoArr.map((item: TodoArr) => {
            return (
              <li key={item.id}>
                {item.isEdit ? (
                  <input type='text' value={editInputValue} onChange={changeTitle} />
                ) : (
                  <p>{item.title}</p>
                )}
                <ButtonWrap>
                  {item.isEdit ? (
                    <Button text='확인' onClick={() => confirmHandler(item)} />
                  ) : (
                    <Button text='수정' onClick={() => editHandler(item)} />
                  )}
                  <Button text='삭제' onClick={() => deleteHandler(item.id)} />
                </ButtonWrap>
              </li>
            );
          })}
        </TodoList>

        <TodoInputWrap>
          <Input value={todoInputValue} setValue={setTodoInputValue} />
          <Button text='확인' onClick={addHandler} />
        </TodoInputWrap>
      </TodoBox>
    </TodoWrap>
  );
}

export default App;
