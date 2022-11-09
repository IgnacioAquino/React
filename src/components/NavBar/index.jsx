import CartWidget from "../CartWidget";
import React from "react";
import { NavLink } from "react-router-dom";


export const navBar = () => {
    return(
        <div className="container">
            <h1 className="titulo"> EA</h1>
        <nav className="nav">
            <ul className="nav_list">
                <li>
                    <NavLink className="nav_link" to="/">INICIO</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/categoria/monitores">MONITORES</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/categoria/celulares">CELULARES</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/">CONTACTO</NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/cart"><CartWidget/></NavLink>
                </li>

            </ul>
            
            </nav>
            </div>
    )
}

export default navBar;