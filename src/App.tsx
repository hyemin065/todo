import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import { Todos } from './type/type';
import Button from './components/Button';

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
      width: 60%;
    }
  }
`;

const ButtonWrap = styled.div`
  width: calc(100% - 60% - 10px);
  margin-left: 10px;
  text-align: right;

  button {
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
  const [todos, setTodos] = useState<Todos[]>([]);
  const [editInputValue, setEditInputValue] = useState('');

  const addHandler = () => {
    if (todoInputValue.trim() === '') return alert('값을 입력해주세요');

    setTodos((prev) => [...prev, { id: Date.now(), title: todoInputValue, isEdit: false }]);
    setTodoInputValue('');
  };

  const confirmHandler = (item: Todos) => {
    setTodos((prev) =>
      prev.map((i) => (i.id === item.id ? { ...item, title: editInputValue, isEdit: false } : { ...i }))
    );
  };

  const editHandler = (item: Todos) => {
    setTodos((prev) => prev.map((i) => (i.id === item.id ? { ...item, isEdit: true } : { ...i, isEdit: false })));
    setEditInputValue(item.title);
  };

  const deleteHandler = (id: number) => {
    setTodos((prev) => prev.filter((item) => id !== item.id));
  };

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setEditInputValue(value);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue(e.currentTarget.value);
  };

  return (
    <TodoWrap>
      <TodoBox>
        <h1>TODO</h1>

        <TodoList>
          {todos.map((item: Todos) => {
            return (
              <li key={item.id}>
                {item.isEdit ? (
                  <input type='text' value={editInputValue} onChange={changeTitle} />
                ) : (
                  <p>{item.title}</p>
                )}
                <ButtonWrap>
                  <Button onClick={() => (item.isEdit ? confirmHandler : editHandler)(item)}>
                    {item.isEdit ? '수정완료' : '수정'}
                  </Button>
                  <Button onClick={() => deleteHandler(item.id)}>삭제</Button>
                </ButtonWrap>
              </li>
            );
          })}
        </TodoList>

        <TodoInputWrap>
          <Input value={todoInputValue} onChange={onChangeHandler} />
          <Button onClick={addHandler}>추가</Button>
        </TodoInputWrap>
      </TodoBox>
    </TodoWrap>
  );
}

export default App;
