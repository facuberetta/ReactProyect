import { useCart } from "../../Context/cartContext";

const Checkout = () => {
    const { cart, clearCart } = useCart();

    return (
        <div>
            <h2>Finalizar Compra</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - Cantidad: {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <button onClick={clearCart}>Confirmar Compra</button>
            )}
        </div>
    );
};

export default Checkout;

