import React from 'react';
import PropTypes from 'prop-types';
import './AddItemButton.css';

const AddItemButton = ({ onAdd, quantity, stock }) => {

    const isDisabled = quantity <= 0 || quantity > stock;

    return (
        <button
            className={`add-item-button ${isDisabled ? 'disabled' : ''}`}
            onClick={() => onAdd(quantity)}
            disabled={isDisabled}
        >
            {isDisabled ? 'Stock insuficiente' : 'Agregar al carrito'}
        </button>
    );
};

AddItemButton.propTypes = {
    onAdd: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
};

export default AddItemButton;
