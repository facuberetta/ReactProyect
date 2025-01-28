import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css';
import React from "react";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <link to ='/'>
                <h1>Emma Wines</h1>
            </link>        
        <div className="categories">
            <NavLink to={'/category/Malbec'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}/>
            <NavLink to={'/category/Cabernet Sauvignon'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}/>
            <NavLink to={'/category/Petit Verdot'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}/>
        </div>
        <CartWidget />
        </nav>
    )
}
export default NavBar