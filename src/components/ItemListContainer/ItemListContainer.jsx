import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "./ItemList";
import './itemListContainer.css';

const products = [
    { id: 1, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/09/ESENT.jpg", title: "Camisa Westside", price: "$12980"},
    {id: 2, image:"https://batukjeans.com.ar/site/wp-content/uploads/2022/09/funnypakk-a.jpg", title:"Riñonera Poli", price: "$3780"},
    {id: 3, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/09/NEENT-3.jpg", title: "Bermuda Fly Away", price: "$11180"}
]


const ItemListContainer = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(products)
            }, 3000);
        });
        getData.then(res => setData(res))
    })

    const onAdd = (quantity) =>{
        alert(`Has añadido ${quantity} unidades al carrito`)
    }

    return(
        <div>
            <h1 className="text-center">Batuk Originals</h1>
            <p className="text-center"> {props.season} <br /> <span className="fw-bold"> coming soon </span> </p>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer;