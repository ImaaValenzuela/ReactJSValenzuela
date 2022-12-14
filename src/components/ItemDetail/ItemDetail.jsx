import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext/CartContext";
import "./itemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {
	
	const [goToCart, setGoToCart] = useState(false);

	const { addItem } = useCartContext();

    const onAdd = (quantity) =>{
        setGoToCart(true);
		addItem(data, quantity);
    };

	return (
		<div className="container">
			<div className="detail">
				<img className="detailImage" src={data.image} alt="" />
				<div className="content">
					<h3 className="text-uppercase font-weight-bold">{data.title}</h3>
					{
						goToCart
						? <Link to='/cart'>Terminar Compra</Link>
						: <ItemCount initial={1} stock={5} onAdd={onAdd}/>
					}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;