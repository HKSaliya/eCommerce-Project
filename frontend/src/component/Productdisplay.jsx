import React, { useContext } from "react";
import start_icon from "../assets/star_icon.png";
import start_dull_icon from "../assets/star_dull_icon.png";
import { Shopcontext } from "../Context/Shopcontext";

const Productdisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(Shopcontext);
    return (
        <>
            <div className="productdisplay">
                <div className="pdleft">
                    <div className="pdleft_imglist">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="pdleft_mimg">
                        <div className="mimg">
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                </div>
                <div className="pdright">
                    <h1>{product.name}</h1>
                    <div className="pfrating">
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_icon} alt="" />
                        <img src={start_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="pdright_prices">
                        <div className="oldprice">${product.old_price}</div>
                        <div className="newprice">${product.new_price}</div>
                    </div>
                    <div className="pdright_discription">We believe that fashion is a powerful form of self-expression. That's why we've curated a collection of Apparels that allow you to wear your emotions proudly, no matter how you're feeling. Multiple checkouts and Payment Options for your Choice and Convenience. </div>
                    <div className="size">
                        <h1>Select size</h1>
                        <div className="sizes">
                            <div>s</div>
                            <div>m</div>
                            <div>l</div>
                            <div>xl</div>
                            <div>xxl</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
                    <p className="pdright_category">
                        <span>Category :</span> Women, T - Shirt, Crop Top
                    </p>
                    <p className="pdright_category">
                        <span>Tags :</span> Modern, Latest
                    </p>
                </div>
            </div>
        </>
    )
}
export default Productdisplay;