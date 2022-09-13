import React, {useEffect, useState}from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const producto = [{ id: 1, image: "https://batukjeans.com.ar/site/wp-content/uploads/2022/09/ESENT.jpg", title: "Camisa Westside", price: "$12980"}]

const ItemDetailContainer = () =>{

    const [data, setData] = useState({});

    useEffect(()=>{
        const getData = new Promise (resolve => {
            setTimeout(()=>{
                resolve(producto)
            }, 3000)
        });

        getData.then(res=> setData(res));
    }, [])

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;