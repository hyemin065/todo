import styled from 'styled-components';
import { flexbox } from '../../styles/flexbox';
import { contents } from '../../utils/common';
import { TodosType } from '../../type/todo';

const StyleTodoListItem = styled.div`
  width: calc(100% - 30% - 20px);
  ${flexbox('flex-start', 'center')}
`;

const TodoDropdownTitle = styled.span`
  width: 100px;
  background-color: #fff;
  padding: 10px;
  display: block;
`;

const TodoTitle = styled.p<{ $success: boolean }>`
  margin-left: 10px;
  text-decoration: ${({ $success }) => ($success ? `line-through` : 'none')};
`;

type Props = {
  todo: TodosType;
};

const TodoListItem = ({ todo }: Props) => {
  return (
    <StyleTodoListItem>
      <TodoDropdownTitle>
        {contents.map((item) => {
          return item.id === todo.contentId && item.title;
        })}
      </TodoDropdownTitle>
      <TodoTitle $success={todo.success === 0 ? false : true}>{todo.title}</TodoTitle>
    </StyleTodoListItem>
  );
};
export default TodoListItem;
