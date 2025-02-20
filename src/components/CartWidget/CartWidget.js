import React from 'react';
import cart from './Assets/carrito.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={cart} alt="Carrito de compras" className="cart-icon" />
            <span className="cart-count">0</span>
        </div>
    );
}

export default CartWidget;
