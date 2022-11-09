import Item from "../Item";
import React from "react";

const ProductsList = ({data = []})=>{
    return (
        data.map(products => <Item key={products.id} info={products}/>)
    )
};

export default ProductsList;