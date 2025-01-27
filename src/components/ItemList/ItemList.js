import PropTypes from "prop-types";

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};
ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ItemList;
