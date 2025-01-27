import { useState, useEffect } from "react"
import {getProducts} from '../../asyncMock'
import ItemList from '../itemList/itemList'
import asyncMock from '../../asyncMocks'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
        }, [])


    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}
)}


export default ItemListContainer