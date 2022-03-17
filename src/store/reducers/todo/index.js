import { TODO_ADD, REMOVE_TODO_ADD } from "../../actions";


const initialState = {
  todo: true,
};

const reducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case TODO_ADD:
      return { ...state, ...action.payload };
    case REMOVE_TODO_ADD:
      return {
        ...state,
        todo: state.todo.filter((item, index) => index !== action.payload)
      }
    default:
      return state;
  }
};

export default reducer;
