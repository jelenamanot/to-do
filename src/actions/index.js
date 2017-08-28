import { ADD_TODO } from '../constants';

export const addToDo = (text) => {
  const action = {
    type: ADD_TODO,
    text
  }
  console.log('action in addToDo', action);
  return action;
}