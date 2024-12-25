import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
        <h1>Emma Wines</h1>
        <div>
            <button>Malbec</button>
            <button>Cabernet Sauvignon</button>
            <button>Syrah</button>
        </div>
        <CartWidget />
        </nav>
    )
}
export default NavBar