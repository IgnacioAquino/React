import {addDoc, collection, getFirestore} from "firebase/firestore";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import  ItemCart  from "../ItemCart";

const Cart = ()=> {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: "Lionel Messi",
            email: "lionelmessi@hotmail.com",
            phone: "123456789",
        },
        items: cart.map( product => ({id: product.id, name: product.name, precio: product.precio, quantity: product.quantity })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order)
        .then(({ id }) => console.log(id));



    }
    
    if (cart.length === 0){
        return (
            <>
            <div className="ttprod">
            <p >NO HAY PRODUCTOS EN EL CARRITO.</p>
            <button><Link className="tt" to='/' >Ver productos</Link></button>
            </div>
            </>

        );
    }

    return(
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
        <p className="ttprice">
            Total: ${(totalPrice()).toFixed(3)};
        </p>
        <div className="ttrc">
        <button onClick={handleClick}>Realizar Compra</button>
        </div>
        </>
    )
};

export default Cart;