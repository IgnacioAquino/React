import React, {useEffect, useState}  from "react";
import { getFirestore, collection, getDocs, query, where }from "firebase/firestore";
import ProductsList from "../ProductsList";
import { useParams } from "react-router-dom";



export const ItemListContainer = ()=> {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() => {
            const querydb = getFirestore();
            const queryCollection = collection(querydb, 'productos');
            if (categoriaId){
                const queryFilter = query(queryCollection, where('category', '==', categoriaId ))
                getDocs(queryFilter)
                    .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
            } else {
                getDocs(queryCollection)
                    .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
            }

        }, [categoriaId]);

    
    return(
        <>
        <ProductsList data={data}/>
        </>
    );
}

export default ItemListContainer;