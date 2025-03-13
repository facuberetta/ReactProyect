import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

const addToCart = (item, quantity) => {
    const existingItem = cart.find((prod) => prod.id === item.id);
    if (existingItem) {
        setCart(
        cart.map((prod) =>
            prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        )
    );
    } else {
        setCart([...cart, { ...item, quantity }]);
    }
};

const removeFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
};

const clearCart = () => {
    setCart([]);
};

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
};
