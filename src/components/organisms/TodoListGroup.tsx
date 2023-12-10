import { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import EditTodoItem from '../molecules/EditTodoItem';
import TodoListItem from '../molecules/TodoListItem';
import TodoEditAndDeleteButtons from '../molecules/TodoEditAndDeleteButtons';
import { TodosType } from '../../type/todo';
import { contents } from '../../utils/common';
import { flexbox } from '../../styles/flexbox';

const TodoGroupWrap = styled.ul`
  margin-bottom: 30px;
  width: 100%;
  max-height: 350px;
  overflow-y: auto;

  > li {
    width: 100%;
    margin-bottom: 10px;
    ${flexbox('space-between', 'center')}
  }
`;

type Props = {
  getTodos: () => void;
  todos: TodosType[];
  editId: number;
  setEditId: Dispatch<SetStateAction<number>>;
};

const TodoListGroup = ({ getTodos, todos, editId, setEditId }: Props) => {
  const [editContentId, setEditContentId] = useState(contents[0].id);
  const [editContents, setEditContents] = useState({
    title: '',
    id: 0,
    success: 0,
  });

  return (
    <TodoGroupWrap>
      {todos.map((item: TodosType) => {
        return (
          <li key={item.id}>
            {editId === item.id ? (
              <EditTodoItem
                editContents={editContents}
                setEditContents={setEditContents}
                editContentId={editContentId}
                setEditContentId={setEditContentId}
              />
            ) : (
              <TodoListItem todo={item} />
            )}

            <TodoEditAndDeleteButtons
              todos={todos}
              todo={item}
              editId={editId}
              setEditId={setEditId}
              editContents={editContents}
              setEditContents={setEditContents}
              editContentId={editContentId}
              setEditContentId={setEditContentId}
              getTodos={getTodos}
            />
          </li>
        );
      })}
    </TodoGroupWrap>
  );
};
export default TodoListGroup;
