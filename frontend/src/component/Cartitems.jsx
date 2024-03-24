import React, { useContext } from "react";
import remove_icon from "../assets/cart_cross_icon.png";
import { Shopcontext } from "../Context/Shopcontext";



const Cartitems = () => {
    const {getTotalcartAmount, all_products, cartItem, removeCart } = useContext(Shopcontext);

    return (
        <>
            <table className="cartdiv" >
                <tr className="cartnav" >
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
                <hr />
                {all_products.map((e) => {
                    if (cartItem[e.id] > 0) {
                        return <tr className="cartpro" >
                            <td><img src={e.image} alt="" className="producticon" /></td>
                            <td className="protitle" >{e.name}</td>
                            <td>${e.new_price}</td>
                            <td><button className="quantity" >{cartItem[e.id]}</button></td>
                            <td>${e.new_price * cartItem[e.id]}</td>
                            <td><img src={remove_icon} className="removeicon" onClick={() => { removeCart(e.id) }} alt="" /></td>
                        </tr>

                    }
                    return null;
                })}
                <div className="cartitemdown">
                    <div className="cartitemtotal">
                        <h1>cart Total</h1>
                        <div>
                            <div className="carttotalitem">
                                <p>Subtotal</p>
                                <p>${getTotalcartAmount()}</p>
                            </div>
                            <hr />
                            <div className="carttotalitem">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="carttotalitem">
                                <h3>Total</h3>
                                <h3>${getTotalcartAmount()}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="promocode">
                        <p>If you have a promocode, Enter it here</p>
                        <div className="promobox">
                            <input type="text" placeholder="promocode" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </table>
        </>
    )
}

export default Cartitems;