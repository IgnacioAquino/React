import React from "react";
import "./ItemCart.css";
import { useCartContext } from "../../context/CartContext";


const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();

    return(
        <div className="ItemCart">
            <img src={product.img} alt={product.name}/>
            <div>
                <h1>{product.name}</h1>
                <h2>{product.descripcion}</h2>
                <p>Cantidad:{product.quantity}</p>
                <p>${product.precio} c/u</p>
                <p>Subtotal: ${(product.precio * product.quantity).toFixed(3)}</p>
                <button onClick={()=> removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
    )
}

export default ItemCart;