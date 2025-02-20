import { Link } from "react-router-dom";
import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <nav className="NavBar">
            <Link to="/" className="logo">
                <h1>Emma Wines</h1>
            </Link>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>

                <li className="dropdown">
                    <button onClick={() => setShowCategories(!showCategories)}>
                        Categorías ▼
                    </button>
                    {showCategories && (
                        <ul className="dropdown-menu">
                            <li><Link to="/category/Malbec">Malbec</Link></li>
                            <li><Link to="/category/Cabernet-Sauvignon">Cabernet Sauvignon</Link></li>
                            <li><Link to="/category/Petit-Verdot">Petit Verdot</Link></li>
                        </ul>
                    )}
                </li>

                <li><Link to="/contacto">Contacto</Link></li>
            </ul>


            <CartWidget />
        </nav>
    );
}

export default NavBar;
