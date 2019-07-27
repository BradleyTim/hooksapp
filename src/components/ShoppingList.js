import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";
import ShoppingDetails from "./ShoppingDetails";

const ShoppingList = props => {
  const { shopping } = useContext(ShoppingListContext);

  return shopping.length ? (
    <ul>
      {shopping.map(item => (
        <ShoppingDetails key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <div>List is currently empty</div>
  );
};

export default ShoppingList;
