import PropTypes from "prop-types";
import Item from "../Item/Item";

const ItemList = ({ products = [] }) => {
    return (
        <div className="ListGroup">
            {products.length > 0 ? (
                products.map((prod) => <Item key={prod.id} {...prod} />)
            ) : (
                <p>No hay productos disponibles en esta categoría.</p>
            )}
        </div>
    );
};

ItemList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ItemList;

