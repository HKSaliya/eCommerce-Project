import React, { useContext } from "react";
import { Shopcontext } from "../Context/Shopcontext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../component/Item";

const Category = (props) => {
    const { all_products } = useContext(Shopcontext);
    return (
        <>
            <div className="mcategory">
                <div className="container">
                    <div className="category">
                        <img src={props.banner} alt="" />
                    </div>
                    <div className="shopcategoryindex">
                        <p>
                            <span>Showing 1-12</span> out of 36 products
                        </p>
                        <div className="shopsort">
                            <div className="sort">
                                Short by <img src={dropdown_icon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="shopcategoryproduct">
                        {all_products.map((item, i) => {
                            if (props.category == item.category) {
                                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            }
                            else {
                                return null;
                            }
                        })}
                    </div>
                    <div className="loadmore">
                        <p>Expolore more</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;