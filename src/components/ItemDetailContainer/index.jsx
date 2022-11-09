import ItemDetail from "../ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const products = [
    {
        id: 1,
        name: "MONITOR LG 19'",
        descripcion: "Monitor gamer LG 20MK400H led 19.5' negro 100V/240V",
        category: "monitores",
        img: "https://mexx-img-2019.s3.amazonaws.com/36366_1.jpeg",
        precio: 49.949
        
    },

    {
        id: 2,
        name: "MONITOR LG 20'",
        descripcion: "Monitor LG 20' LED HD Panel TN 5MS VGA HDMI 16:9 Gaming",
        category: "monitores",
        img: "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000009000/9565.jpg",
        precio: 58.049
        
    },

    {
        id: 3,
        name: "MONITOR LG 27'",
        descripcion: "Monitor gamer LG 27MK400H led 27' negro 100V/240V",
        category: "monitores",
        img: "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000009000/9567.jpg",
        precio: 84.799
        
    },
    {
        id: 4,
        name: "SAMSUNG GALAXY Z FOLD 4",
        descripcion: "Celular Samsung Galaxy Z Fold4 256GB Black",
        category: "celulares",
        img: "https://images.fravega.com/f300/d01047ac1160082d33a808fce19fff3d.jpg.webp",
        precio: 429.999
        
    },

    {
        id: 5,
        name: "SAMSUNG GALAXY S22 PLUS",
        descripcion: "Celular Samsung Galaxy S22 White 128GB/8GB",
        category: "celulares",
        img: "https://images.fravega.com/f300/86ab3918c3909bdeb9ac44590243cf37.jpg.webp",
        precio: 296.999
        
    },

    {
        id: 6,
        name: "SAMSUNG GALAXY S20FE",
        descripcion: "Samsung Galaxy S20FE 128GB/6GB Azul",
        category: "celulares",
        img: "https://images.fravega.com/f300/83a0a11263c7f4db3e7008b315a03f65.jpg.webp",
        precio: 296.999
        
    },

];

export const ItemDetailContainer = ()=> {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
            const getData = new Promise(resolve => {
                setTimeout(() => {
                  resolve(products);
             }, 1000);
          });
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))))
     }, []);



    return(
        <ItemDetail data = {data} />
    );

}

export default ItemDetailContainer;