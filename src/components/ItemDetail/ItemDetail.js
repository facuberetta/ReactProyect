import React, { useState } from 'react'
import itemCount from './itemCount' 

const ItemDetail = () => {
    const [cartQuantity, setCartQuantity] = useState(0)

    const stock = 10
    const initial = 1
    const onAdd = (quantity) => {
        setCartQuantity(cartQuantity + quantity)
        console.log(Se agregaron ${quantity} productos al carrito)
    }

    return (
        <div>
            <h1>Detalle del Producto</h1>
            <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
            <p>Cantidad en el carrito: {cartQuantity}</p>
        </div>
    )
}
+

export default ItemDetail


