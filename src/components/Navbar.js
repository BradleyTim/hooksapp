import React, { useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const Navbar = props => {
  const { shopping } = useContext(ShoppingListContext);

  return (
    <header>
      <h1>Shopping List</h1>
      <p>You have {shopping.length} items to buy...</p>
    </header>
  );
};

export default Navbar;
