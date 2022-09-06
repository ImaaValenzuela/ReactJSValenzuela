import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './itemListContainer.css';

const ItemListContainer = (props) => {

    const onAdd = (quantity) =>{
        alert(`Has añadido ${quantity} unidades al carrito`)
    }

    return(
        <div className="text-center">
            <h1>Batuk Originals</h1>
            <p> {props.season} <br /> <span className="fw-bold"> coming soon </span> </p>
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;