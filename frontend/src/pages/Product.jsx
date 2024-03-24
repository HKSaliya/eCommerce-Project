import React, { useContext } from "react";
import { Shopcontext } from "../Context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../component/Breadcrum";
import Productdisplay from "../component/Productdisplay";
import DescriptionBox from "../component/DescriptionBox";
import Related from "../component/Related";


const Product=()=>{
    const {all_products}= useContext(Shopcontext);
    const {productId}=useParams();

    const product = all_products.find((e)=> e.id == Number(productId) );

    return(
        <>
        <div className="product">
            <div className="container">
                <div className="inner_product">
                    <Breadcrum product={product} />
                    <Productdisplay product={product} />
                    <DescriptionBox/>
                    <Related/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;