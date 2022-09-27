import React from "react";
import logo from "../../assets/bag-emty.svg";
import { useCartContext } from "../../context/CartContext/CartContext";
import './cartWidget.css';

const CartWidget = () =>{
    const {totalProducts}= useCartContext();
    return(
        <div>
            <img className="img-hoover " src={logo} width="17" alt="cart" />
            <span>{totalProducts() || ''}</span>
        </div>
    )
};

export default CartWidget;

