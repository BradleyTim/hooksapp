import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const ShoppingDetails = ({ item }) => {
  const { dispatch } = useContext(ShoppingListContext);
  return (
    <li onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
      {item.name}
    </li>
  );
};

export default ShoppingDetails;
