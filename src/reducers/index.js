import { ADD_TODO } from '../constants';

const todo = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const todos = (state = [], action) => {
  let todos = null;
  
  switch(action.type) {
    case ADD_TODO:
      todos = [...state, todo(action)];
      console.log('todos as state', todos);
      return todos;
    default:
      return state;
  }
}

export default todos;