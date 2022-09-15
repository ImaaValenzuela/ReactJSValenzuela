import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "./ItemList";
import './itemListContainer.css';
import {useParams} from 'react-router-dom';

const products = [
    { id: 1, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/09/ESENT.jpg", title: "Camisa Westside", category: "man", price: "$12980"},
    {id: 2, image:"https://batukjeans.com.ar/site/wp-content/uploads/2022/09/funnypakk-a.jpg", title:"Riñonera Poli", category: "man", price: "$3780"},
    {id: 3, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/09/NEENT-3.jpg", title: "Bermuda Fly Away", category: "man", price: "$11180"},
    {id: 4, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/03/bmed.jpg", title: "Buzo Eupohoria", category: "woman", price:"$9380"},
    {id: 5, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/08/buzo-1253-e.jpg", title: "Buzo Been Away", category: "woman", price: "$8380"},
    {id: 6, image:"https://batukjeans.com.ar/site/wp-content/uploads/2022/09/ETEENT.jpg", title: "Remerea Lete", category: "woman", price:"$4180"}
]


const ItemListContainer = (props) => {

    const {categoriaId} = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(products)
            }, 1000);
        });
        if (categoriaId){
            getData.then(res => setData(res.filter( woman => woman.category === categoriaId)))
        } else if (categoriaId){
            getData.then(res => setData(res.filter( man => man.category === categoriaId)))
        } else {
            getData.then( res => setData(res))
        }

    }, [categoriaId])

    const onAdd = (quantity) =>{
        alert(`Has añadido ${quantity} unidades al carrito`)
    }

    return(
        <div>
            <h1 className="text-center">Batuk Originals</h1>
            <p className="text-center">collection spring summer 2023 <br /> <span className="fw-bold"> coming soon </span> </p>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;