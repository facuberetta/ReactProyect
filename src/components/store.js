import { useState } from "react";
import ProductList from '../components/productsList';

const Store = () => {
    const [cart, setCart] = useState([]);
    const products = [
        { id: 1, name: "Producto 1", price: 100, image: "url_de_imagen_1" },
        { id: 2, name: "Producto 2", price: 200, image: "url_de_imagen_2" },
        { id: 3, name: "Producto 3", price: 300, image: "url_de_imagen_3" },
        { id: 4, name: "Producto 4", price: 400, image: "url_de_imagen_4" },
    ];

const addToCart = (product) => {
    setCart([...cart, product]);
};

    return (
        <div>
            <h1 className="text-center mt-4">Tienda Online</h1>
            <ProductList products={products} addToCart={addToCart} />
        </div>
    );
};

export default Store;
