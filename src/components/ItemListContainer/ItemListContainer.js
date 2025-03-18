// ItemListContainer.js
import { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const productsRef = collection(db, "productos");
                const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef;
                const querySnapshot = await getDocs(q);
                const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(items);
            } catch (err) {
                setError("Hubo un error al cargar los productos");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
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
};

export default ItemListContainer;
