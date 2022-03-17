import { TODO_ADD, REMOVE_TODO_ADD } from "..";



export const TodoAddRedux = (payload) => ({
  type: TODO_ADD,
  payload: payload,
});
export const TodoRemoveRedux = (index) => ({
  type: REMOVE_TODO_ADD,
  payload: index,
}); 