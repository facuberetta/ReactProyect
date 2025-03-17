import { useCart } from '../../Context/cartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h2>Carrito</h2>
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
        ) : (
        cart.map((item) => (
            <div key={item.id}>
                <p>{item.name} - Cantidad: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
        ))
    )}
        <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
);
};

export default Cart;