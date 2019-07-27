import React, { useReducer, createContext } from "react";
import shoppingReducer from "../reducers/ShoppingReducer";

export const ShoppingListContext = createContext();

const ShoppingListContextProvider = props => {
  const [shopping, dispatch] = useReducer(shoppingReducer, []);

  return (
    <ShoppingListContext.Provider value={{ shopping, dispatch }}>
      {props.children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListContextProvider;
