import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product, quantity) => {
    const newCartItems = [...cartItems];
    const existingProductIndex = newCartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      newCartItems[existingProductIndex].quantity += quantity;
    } else {
      newCartItems.push({ ...product, quantity });
    }

    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer addToCart={addToCart} />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
