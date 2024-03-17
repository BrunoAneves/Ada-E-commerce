import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import "./styles.module.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />{" "}
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout cart={[]} />} />
      </Routes>
    </Router>
  );
};

export default App;
