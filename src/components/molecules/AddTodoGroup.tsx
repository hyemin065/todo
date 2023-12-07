import { useState, ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { addTodoApi } from '../../api/todo';
import Dropdown from '../atoms/Dropdown';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { JwtUserInfoType } from '../../type/user';
import { contents } from '../../utils';
import { flexbox } from '../../styles/flexbox';

const AddTodoGroupWrap = styled.div`
  ${flexbox('center', 'center')}
  width: 100%;
`;

const TodoDropdown = styled(Dropdown)`
  width: 100px;
  .titleButton {
    color: #000;
    font-size: 16px;
  }
  ul {
    li {
      button {
        color: #000;
        height: 40px;
      }
    }
  }
`;

const StyleInput = styled(Input)`
  width: 100%;
  border-bottom: 1px solid #000;
  margin-left: 10px;
  color: #000;
`;

const AddTodoButton = styled(Button)`
  margin-left: 10px;
  width: 100px;
`;

type Props = {
  userInfo: JwtUserInfoType;
  getTodos: () => void;
};
const AddTodoGroup = ({ userInfo, getTodos }: Props) => {
  const [todoInputValue, setTodoInputValue] = useState('');
  const [contentId, setContentId] = useState(contents[0].id);

  const changeNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInputValue(e.currentTarget.value);
  };

  const addTodo = async () => {
    if (todoInputValue.trim() === '') return alert('값을 입력해주세요');

    try {
      const res = await addTodoApi({
        title: todoInputValue,
        userId: userInfo.id,
        contentId: contentId,
        success: 0,
      });
      toast.success(res?.message);
      getTodos();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setTodoInputValue('');
    }
  };

  return (
    <AddTodoGroupWrap>
      <TodoDropdown data={contents} titleId={contentId} setTitleIdChange={setContentId} />
      <StyleInput value={todoInputValue} onChange={changeNewTitle} />
      <AddTodoButton className="success" onClick={addTodo}>
        추가
      </AddTodoButton>
    </AddTodoGroupWrap>
  );
};

export default AddTodoGroup;
