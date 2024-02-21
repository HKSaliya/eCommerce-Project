import React from "react";
import data_product from "../assets/data";
import Item from "./Item";


const Popular = () => {
    return (
        <>
            <div className="mpopular">
                <div className="container">
                    <div className="popular">
                        <h1>POPULAR IN WOMEN</h1>
                        <hr />
                        <div className="popularItem">
                            {data_product.map((item, i) => {
                                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Popular;