import React, { useReducer, createContext, useEffect } from "react";
import shoppingReducer from "../reducers/ShoppingReducer";

export const ShoppingListContext = createContext();

const ShoppingListContextProvider = props => {
  const [shopping, dispatch] = useReducer(shoppingReducer, [], () => {
    const shoppingData = localStorage.getItem("shopping");
    return shoppingData ? JSON.parse(shoppingData) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping", JSON.stringify(shopping));
  }, [shopping]);

  return (
    <ShoppingListContext.Provider value={{ shopping, dispatch }}>
      {props.children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListContextProvider;
