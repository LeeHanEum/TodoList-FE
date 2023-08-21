import React from 'react';
import TodoEachList from './TodoEachList';
import TodoCreate from './TodoCreate';
// 추가 부분 시작
import { useTodoState } from './TodoContext';
// 추가 부분 끝

const TodoList = () => {
  // 추가 부분 시작
  const todos = useTodoState();
  // 추가 부분 끝

  const style = {
    box: {
      flex: '1',
      padding: '20px 32px 48px 32px',
      overflowY: 'auto',
    }
  };
 // 수정 부분 시작
  return (
    <div style={style.box}>
      {todos && todos.map((todo) => (
        <TodoEachList 
          text={todo.text} 
          done={todo.done} 
          id={todo.id}/>
      ))}
      <TodoCreate />
    </div>
  )
  // 수정 부분 끝
}

export default TodoList;
