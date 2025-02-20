import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from "../../asyncMocks";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchProducts = categoryId ? getProductsByCategory : getProducts;

        fetchProducts(categoryId)
            .then(response => setProducts(response))
            .catch(err => setError("Hubo un error al cargar los productos"))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div>
            <h1>¡Bienvenidos a nuestra tienda de vinos!</h1>
            
            {loading && <p>Cargando productos...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {!loading && !error && products.length > 0 && (
                <ItemList products={products} />
            )}
        </div>
    );
}



export default ItemListContainer;
