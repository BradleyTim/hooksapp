import React, { useContext, useState } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const ShoppingForm = () => {
  const { addShopping } = useContext(ShoppingListContext);
  const [item, setItem] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addShopping(item);
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        placeholder="enter new item"
        onChange={e => setItem(e.target.value)}
        required
        autoFocus
      />
      <input type="submit" value="New Item" />
    </form>
  );
};

export default ShoppingForm;
