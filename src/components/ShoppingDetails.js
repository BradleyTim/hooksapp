import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const ShoppingDetails = ({ item }) => {
  const { removeShopping } = useContext(ShoppingListContext);
  return <li onClick={() => removeShopping(item.id)}>{item.name}</li>;
};

export default ShoppingDetails;
