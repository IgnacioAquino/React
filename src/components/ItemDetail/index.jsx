import "./ItemDetail.css";
import React,{useState} from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";


export const ItemDetail = ({ data })=> {
    const [goCart, setGoCart] = useState (false);

    const onAdd = (quantity) =>{
        setGoCart(true);
    }

    return(
        <>
        <div className="container2">
            <div className="itembox">
                <img src={data.img} alt={data.name} />
                <div className="content">
                <h1>{data.name}</h1>
                <h2>{data.descripcion}</h2>
                <p>${data.precio}</p>
                {
                    goCart
                    ? <button><Link className="finish" to="/cart">Finalizar Compra</Link></button>
                    : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                }
                </div>
            </div>
        </div>
        
        </>
    )

}

export default ItemDetail;

