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

export default ItemList;
