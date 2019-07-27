import React, { useState, createContext } from "react";
import uuid from "uuid";

export const ShoppingListContext = createContext();

const ShoppingListContextProvider = props => {
  const [shopping, setShopping] = useState([
    { name: "bread", id: 1 },
    { name: "milk", id: 2 }
  ]);

  const addShopping = name => {
    setShopping([{ name, id: uuid.v1() }, ...shopping]);
  };

  const removeShopping = id => {
    setShopping(shopping.filter(item => item.id !== id));
  };

  return (
    <ShoppingListContext.Provider
      value={{ shopping, addShopping, removeShopping }}
    >
      {props.children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListContextProvider;
