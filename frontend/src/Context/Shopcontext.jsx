import React, { createContext, useState } from "react";
import all_products from "../assets/all_product";

export const Shopcontext = createContext(null);

const getCartItem=()=>{
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[index]=0;
    }
    return cart;
}

const Shopcontextprovider = (props)=>{
    const [cartItem, setCartItem]= useState(getCartItem());
    
    const addToCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem);
    }
    const removeCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalcartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
            }
            return totalAmount;
        }
    }
    
    
    
    const contextvalue = {getTotalcartAmount, all_products, cartItem, addToCart, removeCart};
    
    return (
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default Shopcontextprovider;