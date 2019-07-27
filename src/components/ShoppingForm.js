import React, { useContext, useState } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const ShoppingForm = () => {
  const { dispatch } = useContext(ShoppingListContext);
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", item: { name } });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="enter new item"
        onChange={e => setName(e.target.value)}
        required
        autoFocus
      />
      <input type="submit" value="New Item" />
    </form>
  );
};

export default ShoppingForm;
