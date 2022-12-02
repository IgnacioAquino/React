import React from "react";
import "./CartWidget.css"
import { useCartContext } from "../../context/CartContext";


export const CartWidget = () => {
const {totalProducts} = useCartContext();
    return(
        <>
        <box-icon type='solid' name='cart'></box-icon>
        <span className="cartw">{totalProducts() || ""}</span>
        </>
    )
};

export default CartWidget;