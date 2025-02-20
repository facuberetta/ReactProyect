import { useState, useEffect } from "react";
import { getProductsById } from '../../asyncMocks';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ addToCart }) => {
  const [product, setProduct] = useState([]);
  const { itemId } = useParams();

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
      <ItemDetail {...product} addToCart={addToCart} />
    </div>
  );
};

export default ItemDetailContainer;
