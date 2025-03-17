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
import { db } from './firebaseConfig.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'; 
import Store from './components/store.js';

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "tu_coleccion")); // Cambia "tu_coleccion" por el nombre de tu colección
    const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setData(items);
  };

  const addData = async () => {
    if (inputValue.trim() === '') return;
    await addDoc(collection(db, "tu_coleccion"), { value: inputValue });
    setInputValue('');
    fetchData(); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/store" element={<Store />} /> {/* Agregamos la tienda */}
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
        <div>
          <h1>Datos de Firestore</h1>
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <button onClick={addData}>Agregar</button>
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;