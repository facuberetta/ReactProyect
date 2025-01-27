import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMocks";
import ItemList from "../ItemList/ItemList";
import PropTypes from "prop-types";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}
ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer