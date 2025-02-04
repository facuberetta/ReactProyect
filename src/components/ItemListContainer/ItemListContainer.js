import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMocks";
import ItemList from "../ItemList/ItemList";
import PropTypes from "prop-types";
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
        console.log(products)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            }, [categoryId])

    return (
        <div>
            <h1>{"Bienvenidos!"}</h1>
            {products.length > 0 &&
                <ItemList products={products} />
            }
        </div>
    )
}



export default ItemListContainer;
