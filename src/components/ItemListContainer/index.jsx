import React, {useEffect, useState}  from "react";
import ProductsList from "../ProductsList";
import { useParams } from "react-router-dom";


const products = [
    {
        id: 1,
        name: "MONITOR LG 19'",
        descripcion: "MONITOR LG 19'",
        category: "monitores",
        img: "https://mexx-img-2019.s3.amazonaws.com/36366_1.jpeg",
        precio: 49.949
        
    },

    {
        id: 2,
        name: "MONITOR LG 20'",
        descripcion: "MONITOR LG 20'",
        category: "monitores",
        img: "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000009000/9565.jpg",
        precio: 58.049
        
    },

    {
        id: 3,
        name: "MONITOR LG 27'",
        descripcion: "MONITOR LG 27'",
        category: "monitores",
        img: "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000009000/9567.jpg",
        precio: 84.799
        
    },
    {
        id: 4,
        name: "SAMSUNG GALAXY Z FOLD 4",
        descripcion: "Celular Samsung Galaxy Z Fold4 512GB",
        category: "celulares",
        img: "https://images.fravega.com/f300/d01047ac1160082d33a808fce19fff3d.jpg.webp",
        precio: 429.999
        
    },

    {
        id: 5,
        name: "SAMSUNG GALAXY S22 PLUS",
        descripcion: "Celular Samsung Galaxy S22 Plus Green",
        category: "celulares",
        img: "https://images.fravega.com/f300/86ab3918c3909bdeb9ac44590243cf37.jpg.webp",
        precio: 296.999
        
    },

    {
        id: 6,
        name: "SAMSUNG GALAXY S20FE",
        descripcion: "Samsung Galaxy S20FE 128 GB Azul",
        category: "celulares",
        img: "https://images.fravega.com/f300/83a0a11263c7f4db3e7008b315a03f65.jpg.webp",
        precio: 296.999
        
    },

];



export const ItemListContainer = ()=> {
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() => {
            const getData = new Promise(resolve => {
                setTimeout(() => {
                  resolve(products);
             }, 1000);
          });
          if(categoriaId){
            getData.then(res => setData(res.filter(product => product.category === categoriaId)))
          } else{
            getData.then(res => setData(res))
          }
        
     }, [categoriaId]);

    
    return(
        <>
        <ProductsList data={data}/>
        </>
    );
}

export default ItemListContainer;