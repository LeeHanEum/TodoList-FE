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

const todoReducer = (state, action) =>{
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

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
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

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  return context;
}

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  return context;
}

export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  return context;
}