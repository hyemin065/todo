import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Dropdown from '../atoms/Dropdown';
import Input from '../atoms/Input';
import { EditContentsType } from '../../type/todo';
import { contents } from '../../utils';
import { flexbox } from '../../styles/flexbox';

const EditTotoItem = styled.div`
  width: calc(100% - 30% - 20px);
  ${flexbox('flex-start', 'center')}
`;

const EditCheckBox = styled.input`
  margin-right: 10px;
  width: 30px;
  height: 20px;
  background-color: #fff;
  &:checked {
    background-color: blue;
  }
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

type Props = {
  editContents: EditContentsType;
  setEditContents: Dispatch<SetStateAction<EditContentsType>>;
  editContentId: number;
  setEditContentId: Dispatch<SetStateAction<number>>;
};

const EditTodoItem = ({
  editContents,
  setEditContents,
  editContentId,
  setEditContentId,
}: Props) => {
  const changeEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setEditContents((prev: EditContentsType) => {
      return { ...prev, title: value };
    });
  };

  const changeSuccess = () => {
    setEditContents((prev: EditContentsType) => ({ ...prev, success: prev.success === 0 ? 1 : 0 }));
  };

  return (
    <EditTotoItem>
      <EditCheckBox
        type="checkbox"
        onChange={changeSuccess}
        checked={editContents.success === 0 ? false : true}
      />
      <TodoDropdown data={contents} titleId={editContentId} setTitleIdChange={setEditContentId} />
      <StyleInput value={editContents.title} onChange={changeEditTitle} />
    </EditTotoItem>
  );
};

export default EditTodoItem;
