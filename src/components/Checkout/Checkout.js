import React, { useState } from "react";

const Checkout = ({ cartItems }) => {
const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
};

return (
    <div>
        <h2>Formulario de Checkout</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="address">Dirección:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
                <button type="submit">Finalizar Compra</button>
            </form>
    </div>
    );
};

export default Checkout;
