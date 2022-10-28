import CartWidget from "../CartWidget";
import React from "react";



export const navBar = () => {
    return(
        <div className="container">
            <h1 className="titulo"> ELECTRONICA AQUINO</h1>
        <nav className="nav">
            <ul className="nav_list">
                <li>
                    <a className="nav_link" href="#">INICIO</a>
                </li>
                <li>
                    <a className="nav_link" href="#"><CartWidget/></a>
                </li>

            </ul>
            
            </nav>
            </div>
    )
}

export default navBar;