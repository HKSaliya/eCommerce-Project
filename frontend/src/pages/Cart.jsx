import React, { useContext } from "react";
import Cartitems from "../component/Cartitems";

const Cart = () => {
    return (
        <>
            <div className="cart">
                <div className="container">
                    <div className="cart_inner">
                        <Cartitems/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;