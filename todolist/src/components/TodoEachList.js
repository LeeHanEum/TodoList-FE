import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
// 추가 부분 시작
import { useTodoDispatch } from './TodoContext';
// 추가 부분 끝

const ListBox = styled.div``;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    border: 1px solid #ced4da;
    ${props =>
        props.done &&
        css`
          border: 1px solid #38d9a9;
          color: #38d9a9;
        `}
`;

const TextList = styled.div`
    flex: 1;
    font-size: 21px;
    ${props =>
        props.done &&
        css`
          color: #ced4da;
        `}
`;

const TodoEachList = ({id, done, text}) => {

    // 수정 부분 시작
    const [isHover, setHover] = useState(0);
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });
    // 수정 부분 끝

    const style = {
        listBox : {
            display : 'flex',
            alignItems : 'center',
            padding : '12px 0',
        },
        delete : {
            display : 'flex',
            alignItems : 'center',
            justifyContent: 'center',
            color: '#dee2e6',
            fontSize: '24px',
            cursor: 'pointer',
        },
    }
    // 수정 부분 시작
  return (
    <ListBox style={style.listBox} 
        onMouseOver={() => setHover(1)} 
        onMouseOut={() => setHover(0)}>
        <CheckCircle onClick={onToggle} done={done}>
            {done === true ? (<MdDone />) : ("")}
        </CheckCircle>
        <TextList done={done}>{text}</TextList>
        {isHover ? (
            <div style={style.delete} onClick={onRemove}><MdDelete /></div>
        ) :(" ")}
    </ListBox>
  )
  // 수정 부분 끝
}

export default TodoEachList