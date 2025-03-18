import { Link } from 'react-router-dom';
import styles from './Item.module.css'; // Importa el módulo CSS

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className={styles.CardItem}> {/* Usa styles.CardItem */}
            <header className={styles.Header}> {/* Usa styles.Header */}
                <h2 className={styles.ItemHeader}> {/* Usa styles.ItemHeader */}
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={styles.ItemImg} /> {/* Usa styles.ItemImg */}
            </picture>
            <section>
                <p className={styles.Info}> {/* Usa styles.Info */}
                    Precio: ${price}
                </p>
                <p className={styles.Info}> {/* Usa styles.Info */}
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className={styles.ItemFooter}> {/* Usa styles.ItemFooter */}
                <Link to={`/item/${id}`} className={styles.option}> {/* Usa styles.option */}
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
};

export default Item;