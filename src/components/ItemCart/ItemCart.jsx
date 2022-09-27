import React from "react";
import { useCartContext } from "../../context/CartContext/CartContext";
import './itemCart.css'

const ItemCart = ({product}) => {
    const {removeItem} = useCartContext();
    return(
        <div className="itemCart">
            <img src={product.image} alt={product.title}/>
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad : {product.quantity}</p>
                <p>Precio uniario: {product.price}</p>
                <p>Subtotal : ${product.quantity * product.price} </p>
                <button onClick={() => removeItem (product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
