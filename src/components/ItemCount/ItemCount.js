import './ItemCount.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import React from 'react';  // Agregar esta línea si usas JSX


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='counter'>
            <div className='controls'>
                <button className="button" onClick={decrement}>-</button>
                <h4 className='number'>{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={quantity <= 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ItemCount
