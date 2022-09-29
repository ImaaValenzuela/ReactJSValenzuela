import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import './itemListContainer.css';
import {useParams} from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'


export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "products");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

	return (
		<>
			<p className="text-center">collection spring summer 2023 <br /> <span className="fw-bold"> coming soon </span> </p>
			<ItemList data={data} />
		</>
	);
};

export default ItemListContainer;