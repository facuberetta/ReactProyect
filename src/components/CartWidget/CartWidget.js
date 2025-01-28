import React from 'react';
import cart from './Assets/carrito.png'

const CartWidget = () => {
    return (
    <div>
        <img src={cart} alt="cart-widget" />
        0
    </div>
    );
}

export default CartWidget