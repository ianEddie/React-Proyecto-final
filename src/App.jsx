import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import CartContextProvider from "./Components/Context/CartContext";
import Cart from "./Components/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Navbar from "./Components/Navbar";
import "./Assets/index.css"
import Checkout from "./Components/Checkout";
const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
