import { useState, useEffect } from "react";
import { getProductsById } from '../../asyncMocks';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { useCart } from "../../Context/cartContext";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { itemId } = useParams();
    const { addToCart } = useCart(); 
    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]);

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} addToCart={addToCart} /> {/* Pasar addToCart */}
        </div>
    );
};

export default ItemDetailContainer;

