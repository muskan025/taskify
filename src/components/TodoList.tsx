import React from 'react'
import {Todo} from '../model'
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props>= ({todos,setTodos}) => {
  return (
   <div className="todo-container">
     <div className="todos">
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
   </div>
  );
}

export default TodoList