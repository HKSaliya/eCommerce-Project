import React from "react";

const Item=(props)=>{
    return(
        <>
        {/* <div className="item">
            <div className="container">
                <div className="item_inner"> */}
                    <div className="mitem">
                        <img src={props.image} alt="" />
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