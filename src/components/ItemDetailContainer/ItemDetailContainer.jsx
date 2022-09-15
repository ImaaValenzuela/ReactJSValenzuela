import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const product = [
    { id: 1, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/09/ESENT.jpg", title: "Camisa Westside", category: "man", price: "$12980"},
    {id: 2, image:"https://batukjeans.com.ar/site/wp-content/uploads/2022/09/funnypakk-a.jpg", title:"Riñonera Poli", category: "man", price: "$3780"},
    {id: 3, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/09/NEENT-3.jpg", title: "Bermuda Fly Away", category: "man", price: "$11180"},
    {id: 4, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/03/bmed.jpg", title: "Buzo Eupohoria", category: "woman", price:"$9380"},
    {id: 5, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/08/buzo-1253-e.jpg", title: "Buzo Been Away", category: "woman", price: "$8380"},
    {id: 6, image:"https://batukjeans.com.ar/site/wp-content/uploads/2022/09/ETEENT.jpg", title: "Remerea Lete", category: "woman", price:"$4180"}
]


const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { itemId } = useParams();

	useEffect(() => {
		const getData = new Promise((resolve) => {
			setTimeout(() => {
				resolve(product);
			}, 1000);
		});
		getData.then((res) =>
			setData(res.find((product) => product.id === parseInt(itemId))),
		);
	}, [itemId]);

	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;