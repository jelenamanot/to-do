import { ADD_TODO, DELETE_TODO } from '../constants';

// ------ ADD TO DO  ------
export const addToDo = (text) => {
  const action = {
    type: ADD_TODO,
    text
  }
  console.log('action in addToDo', action);
  return action;
}

// ------ DELETE TO DO  ------
export const deleteToDo = (id) => {
  const action = {
    type: DELETE_TODO,
    id
  }
  console.log('action in delete', action);
  return action;
}