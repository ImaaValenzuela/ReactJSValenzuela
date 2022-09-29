import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getFirestore, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { itemId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, 'products', itemId);
		getDoc(queryDoc)
			.then(res => setData({id : res, ...res.data()}))
		}, [itemId]);
	return <ItemDetail data={data} />;
};

export default ItemDetailContainer;