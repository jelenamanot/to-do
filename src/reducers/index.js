import { ADD_TODO, DELETE_TODO, CLEAR_TODOS } from '../constants';

import { bake_cookie, read_cookie } from 'sfcookies';

const todo = (action) => {
  return {
    text: action.text,
    dueDate: action.dueDate,
    id: Math.random()
  }
}

// for: DELETE_TODO
const removeById = (state = [], id) => {
  const todos = state.filter(todo => todo.id !== id);
  console.log('new reduced todos:', todos);
  return todos;
}

const todos = (state = [], action) => {
  let todos = null;
  state = read_cookie('todos');
  
  switch(action.type) {
    case ADD_TODO:
      todos = [...state, todo(action)];
      bake_cookie('todos', todos);
      return todos;
    case DELETE_TODO:
      todos = removeById(state, action.id);
      bake_cookie('todos', todos);
      return todos;
    case CLEAR_TODOS:
      todos = [];
      bake_cookie('todos', todos);
      return todos;
    default:
      return state;
  }
}

export default todos;