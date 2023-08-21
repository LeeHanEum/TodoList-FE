import React, { useReducer, createContext, useContext, useRef } from 'react';

const Todos = [
    {
        id: 1,
        text: 'c언어 과제하기',
        done: true
      },
      {
        id: 2,
        text: '자료구조 ADT 공부',
        done: true
      },
      {
        id: 3,
        text: '에버랜드 놀러가기',
        done: false
      },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
  }
}
// context 객체 생성, state, action, id를 제공하기 위함
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) =>{
  const [state, dispatch] = useReducer(todoReducer, Todos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}


//context 객체들의 값을 반환
export const useTodoState = () => {
  return useContext(TodoStateContext);
}

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
}

export const useTodoNextId = () => {
  return useContext(TodoNextIdContext);
}