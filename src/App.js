import './App.css';
import './components/productList/ProductList.css'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart.js';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './Context/cartContext.js';
import "bootstrap/dist/css/bootstrap.min.css";
import productsList from './components/productsList.js';
import Store from './components/store.js';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/store" element={<Store />} /> {/* Agregamos la tienda */}
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
};



export default App;



