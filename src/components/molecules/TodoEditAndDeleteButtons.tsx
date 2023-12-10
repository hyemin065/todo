import { Dispatch, SetStateAction } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { deleteTodoApi, editTodoApi } from '../../api/todo';
import Button from '../atoms/Button';
import { userState } from '../../store/login';
import { EditTodoPropsType } from '../../type/todo';
import { EditContentsType, TodosType } from '../../type/todo';
import { flexbox } from '../../styles/flexbox';

const ButtonWrap = styled.div`
  ${flexbox('flex-end', 'center')}
  width: 30%;
  margin-left: 10px;

  button {
    &:last-child {
      margin-left: 10px;
    }
  }
`;

const TodoButton = styled(Button)`
  width: 80px;
  background-color: #e59a38;
`;

type Props = {
  todos: TodosType[];
  todo: TodosType;
  editId: number;
  setEditId: Dispatch<SetStateAction<number>>;
  editContents: EditContentsType;
  setEditContents: Dispatch<SetStateAction<EditContentsType>>;
  editContentId: number;
  setEditContentId: Dispatch<SetStateAction<number>>;
  getTodos: () => void;
};

const TodoEditAndDeleteButtons = ({
  todos,
  todo,
  editId,
  setEditId,
  editContents,
  setEditContents,
  editContentId,
  setEditContentId,
  getTodos,
}: Props) => {
  const { userInfo } = userState();

  const isEdit = (item: EditTodoPropsType) => {
    setEditId(item.id);
    setEditContentId(item.contentId);
    setEditContents({
      title: item.title,
      id: userInfo?.id,
      success: item.success,
    });
  };

  const editTodo = async (item: EditTodoPropsType) => {
    const findTodo = todos.find((i: TodosType) => i.id === item.id);
    if (!findTodo) {
      toast.error('수정 실패했습니다');
      return;
    }

    const { title, contentId, success } = findTodo;
    if (title !== item.title || contentId !== item.contentId || success !== item.success) {
      try {
        const res = await editTodoApi(item);
        toast.success(res?.message);
        getTodos();
      } catch (error: any) {
        toast.success(error.message);
      }
    } else {
      setEditId(0);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const res = await deleteTodoApi(id);
      toast.success(res?.message);
      getTodos();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <ButtonWrap>
      {editId === todo.id ? (
        <TodoButton
          onClick={() =>
            editTodo({
              title: editContents.title,
              id: todo.id,
              contentId: editContentId,
              success: editContents.success,
            })
          }>
          수정완료
        </TodoButton>
      ) : (
        <TodoButton onClick={() => isEdit(todo)}>수정</TodoButton>
      )}
      <TodoButton onClick={() => deleteTodo(todo.id)}>삭제</TodoButton>
    </ButtonWrap>
  );
};
export default TodoEditAndDeleteButtons;
