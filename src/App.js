import React from "react";
import "./App.css";
import ShoppingListContextProvider from "./contexts/ShoppingListContext";
import Navbar from "./components/Navbar";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="App">
      <ShoppingListContextProvider>
        <Navbar />
        <ShoppingForm />
        <ShoppingList />
      </ShoppingListContextProvider>
    </div>
  );
}

export default App;
