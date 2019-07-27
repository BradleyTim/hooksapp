import uuid from "uuid";

const shoppingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [{ name: action.item.name, id: uuid.v1() }, ...state];
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};

export default shoppingReducer;
