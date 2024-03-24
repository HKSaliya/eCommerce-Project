import React from "react";
import data_product from "../assets/data";
import Item from "./Item";

const Related = () => {
    return (
        <>
            <div className="related">
                <h1>Related products</h1>
                <hr />
                <div className="rproducts">
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Related;