import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems }) => {
const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

return (
    <div>
        <h2>Tu Carrito</h2>
            <ul>
                {cartItems.map(item => (
                <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
                </li>
        ))}
            </ul>
        <h3>Total: ${calculateTotal()}</h3>
            <Link to="/checkout">
            <button>Ir al Checkout</button>
            </Link>
    </div>
);
};

export default Cart;
