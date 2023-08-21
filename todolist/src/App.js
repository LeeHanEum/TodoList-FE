import React from 'react'
import { createGlobalStyle } from 'styled-components';
import TodoBox from './components/TodoBox';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
// 추가 부분 시작
import { TodoProvider } from './components/TodoContext';
// 추가 부분 끝

const BodyStyle = createGlobalStyle`
  body {
    background: #20232a;
  }
`;

const App = () => {
// 수정 부분 시작
  return (
    <>
    <TodoProvider>
      <BodyStyle />
      <TodoBox>
        <TodoHeader />
        <TodoList/>
      </TodoBox>
    </TodoProvider>
    </>
  );
}
// 수정 부분 끝

export default App
