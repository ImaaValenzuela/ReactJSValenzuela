import React from "react";
import logo from "./bag-emty.svg";
import './cartWidget.css';

const CartWidget = () =>{
    return(
        <div>
            <img className="img-hoover " src={logo} width="17" alt="cart" />
        </div>
    )
};

export default CartWidget;

