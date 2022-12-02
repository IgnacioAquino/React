import "./item.css"
import React from "react";
import { Link } from "react-router-dom";





const Item = ({info}) =>{
    
    
    return (
        <Link to={`/detalle/${info.id}`} className="card">
            <img src={info.img} alt={info.name}/>
            <h3>{info.name}</h3>
            <p>${info.precio}</p>
        </Link>
    )
};

export default Item;