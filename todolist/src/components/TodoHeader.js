import React from 'react';
// 추가 부분 시작
import { useTodoState } from './TodoContext';
// 추가 부분 끝

const TodoHeader = () => {
    // 추가 부분 시작
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);
    // 추가 부분 끝

    const style = {
        body : {
            padding : '48px 32px 24px 32px',
            borderBottom : '1px solid lightgray',
        },
        h1 : {
            margin : '0',
            fontSize : '36px',
        },
        day : {
            marginTop : '10px',
            fontSize : '21px',
        },
        task : {
            color : '#20c997',
            fontSize : '18px',
            marginTop : '40px',
            fontWeight : 'bold'
        }
    };
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
     const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

     // 남은 할일 : {undoneTasks.length} 개로 수정함
  return (
    <div style={style.body}>
        <h1 style={style.h1}>{dateString}</h1>
        <h3 style={style.day}>{dayName}</h3>
        <div style={style.task}>남은 할일 :{undoneTasks.length}개</div>
    </div>
  )
}

export default TodoHeader

