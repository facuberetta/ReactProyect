import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
            {products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <p>Cargando productos...</p>
            )}
        </div>
    );
};

export default ItemListContainer;