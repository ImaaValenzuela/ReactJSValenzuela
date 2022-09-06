import React from "react";
import './itemListContainer.css';

const ItemListContainer = (props) => {
    return(
        <div className="text-center">
            <h1>Batuk Originals</h1>
            <p> {props.season} <br /> <span className="fw-bold"> coming soon </span> </p>
        </div>
    )
}

export default ItemListContainer;