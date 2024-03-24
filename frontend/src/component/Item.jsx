import React from "react";
import { Link } from "react-router-dom";

const Item=(props)=>{
    return(
        <>
        {/* <div className="item">
            <div className="container">
                <div className="item_inner"> */}
                    <div className="mitem"  onClick={window.scrollTo(0,0)}>
                        <Link to={`/product/${props.id}`}><img  src={props.image} alt="" /></Link>
                        <p>{props.name}</p>
                        <div className="itemPrice">
                            <div className="newPrice">${props.new_price}</div>
                            <div className="oldPrice">${props.old_price}</div>
                        </div>
                    </div>
                {/* </div>

            </div>
        </div> */}
        </>
    )
}
export default Item;