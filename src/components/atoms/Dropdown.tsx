import { useState, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { ArrowIcon } from '../../assets/icon';
import { TodoContentsIdType } from '../../type/todo';

const DropdownWrap = styled.div`
  width: 100%;
  position: relative;
`;

const DropdownButton = styled(Button)`
  width: 100px;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  color: #000;
`;

const StyleArrowIcon = styled(ArrowIcon)`
  vertical-align: middle;
`;

const DropdownUl = styled.ul`
  position: absolute;
  width: 100%;
  background-color: #fff;
  li {
    &:hover {
      button {
        border-radius: 0;
        background-color: #f0f0f0;
      }
    }
  }
`;

type Props<T> = {
  className?: string;
  data: TodoContentsIdType<T>[];
  titleId: number;
  setTitleIdChange: Dispatch<SetStateAction<number>>;
};

const Dropdown = <T extends React.ReactNode>({
  className,
  data,
  titleId,
  setTitleIdChange,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const findTitle = data?.find((item: TodoContentsIdType<T>) => item.id === titleId);

  const clickTitleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const clickDropdown = (id: number) => {
    setTitleIdChange(id);
    setIsOpen(false);
  };

  return (
    <DropdownWrap className={className}>
      <DropdownButton className="titleDropdownButton" onClick={clickTitleDropdown}>
        {findTitle?.title}
        <StyleArrowIcon />
      </DropdownButton>

      {isOpen && (
        <DropdownUl>
          {data.map((item: TodoContentsIdType<T>) => {
            return (
              <li key={item.id}>
                <DropdownButton onClick={() => clickDropdown(item.id)}>{item.title}</DropdownButton>
              </li>
            );
          })}
        </DropdownUl>
      )}
    </DropdownWrap>
  );
};

export default Dropdown;
