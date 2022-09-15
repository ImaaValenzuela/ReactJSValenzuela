import React from "react";
import "./itemDetail.css";

export const ItemDetail = ({ data }) => {
	return (
		<div className="container">
			<div className="detail">
				<img className="detailImage" src={data.image} alt="" />
				<div className="content">
					<h1 className="text-uppercase font-weight-bold">{data.title}</h1>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;