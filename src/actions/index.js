import { ADD_TODO, DELETE_TODO, CLEAR_TODOS } from '../constants';

// ------ ADD TO DO  ------
export const addToDo = (text) => {
  const action = {
    type: ADD_TODO,
    text
  }
  return action;
}

// ------ DELETE TO DO  ------
export const deleteToDo = (id) => {
  const action = {
    type: DELETE_TODO,
    id
  }
  return action;
}

// ------ CLEAR TO DOS  ------
export const clearToDos = () => {
  return {
    type: CLEAR_TODOS
  }
}