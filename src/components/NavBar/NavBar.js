import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';
import React from "react";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to ='/'>
                <h1>Emma Wines</h1>
            </Link>        
        <div className="categories">
            <Link to={'/category/Malbec'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}/>
            <Link to={'/category/Cabernet%Sauvignon'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}/>
            <Link to={'/category/Petit%Verdot'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}/>
        </div>
        <CartWidget />
        </nav>
    )
}
export default NavBar