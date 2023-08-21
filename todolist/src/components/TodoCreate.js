import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd, MdDelete } from 'react-icons/md';
// 추가 부분 시작
import { useTodoDispatch, useTodoNextId } from './TodoContext';
// 추가 부분 

const CreateButton = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  height: 32px;
  font-size: 30px;
  border-radius: 16px;
  ${({ isHover }) =>
    isHover
      ? css`
          border: 2px solid gray;
          font-size: 30px;
          color: white;
          background-color: gray;
          transition: all ease 0.5s 0s;
          cursor: pointer;
        `
      : css`
          border: 2px solid lightgray;
          color: gray;
        `}
`;

const InsertForm = styled.form`
    display : flex;
    padding : 8px 0;
    `;

const Input = styled.input`
    padding: 10px;
    border-radius: 16px;
    border: 2px solid #dee2e6;
    width: 75%;
    margin-bottom : 12px;
    outline: none;
    font-size: 21px;
    box-sizing: border-box;
`;

const TodoCreate = () => {
  const [isHover, setHover] = useState(false);
  const [isListHover, setListHover] = useState(0);
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  // 추가 부분 시작
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };
  // 추가 부분 끝

  const style ={
    notCheckedCircle : {
        width: '32px',
        height: '32px',
        borderRadius: '16px',
        border: '1px solid #ced4da',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '20px',
        marginTop : '6px',
        cursor: 'pointer',
    },
    delete : {
        display : 'flex',
        alignItems : 'center',
        justifyContent: 'center',
        color: '#dee2e6',
        fontSize: '24px',
        cursor: 'pointer',
        padding : '0px 0px 15px 34px',
        margin : '0px',
    },
  }

  return (
    <>
    <div>
      {open ? (
        <InsertForm 
            onMouseOver={() => setListHover(1)} 
            onMouseOut={() => setListHover(0)}
            // 추가 부분 시작
            onSubmit={onSubmit}
            // 추가 부분 끝
            >
            <span style={style.notCheckedCircle}></span>
            <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요" 
            // 추가 부분 시작
            onChange={onChange}
            // 추가 부분 끝 
            />
            {isListHover ? (
            <span style={style.delete}><MdDelete/></span>
        ) :(" ")}
        </InsertForm>
      ) : null}
      </div>
      <div 
        onMouseOver={() => setHover(true)} 
        onMouseOut={() => setHover(false)}>
      <CreateButton isHover={isHover} onClick={onToggle} 
      // 추가 부분 시작
      open={open} 
      // 추가 부분 끝
      >
        <MdAdd style={{ margin: '0 auto' }} />
      </CreateButton>
      </div>
    </>
  );
};

export default TodoCreate;