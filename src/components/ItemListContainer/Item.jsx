import React from "react";
import './itemListContainer.css';

const Item = ({info}) => {
    return (
        <a href="/" className="product">
            <img src={info.image} alt="" />
            <p className="align-baseline">{info.title}</p>
            <p>{info.price}</p>
        </a>
    )
};

export default Item;