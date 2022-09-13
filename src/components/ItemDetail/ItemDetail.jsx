import React from "react";
import './itemDetail.css';

const ItemDetail = ({data}) => {
    return(
        <div className="container">
            <div className="detail">
                <img src={data.image} alt="" className="detailImg" />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    )
}

// const ItemDetail = ({data = []}) => {
//     return(
//         <div className="container">
//             <div className="detail">
//                 <img src={data.image} alt="" className="detailImg" />
//                 <div className="content">
//                     <h1>{data.title}</h1>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default ItemDetail;