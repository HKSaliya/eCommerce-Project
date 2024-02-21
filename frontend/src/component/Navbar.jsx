import React, { useState } from "react";
import logo from "../assets/logo.png"
import cart from "../assets/cart_icon.png"
import { Link } from "react-router-dom";

const Navbar=()=>{
    const [menu, setMenu] = useState("shop");
    return(
        <>
        <div className="nav">
            <div className="container">
                <div className="nav_inner">
                    <div className="navLeft">
                        <img src={logo} alt="" />
                        <p>SHOPPER</p>
                    </div>
                    <ul className="menu">
                        <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}} to='/' >Shop</Link> {menu=="shop"?<hr/>:<></>} </li>
                        <li onClick={()=>{setMenu("Men")}} ><Link style={{textDecoration:'none'}} to='/men'>Men</Link> {menu=="Men"?<hr/>:<></>} </li>
                        <li onClick={()=>{setMenu("Women")}} ><Link style={{textDecoration:'none'}} to='/women' >Women</Link> {menu=="Women"?<hr/>:<></>} </li>
                        <li onClick={()=>{setMenu("Kids")}} ><Link style={{textDecoration:'none'}} to='/kid' >Kids</Link> {menu=="Kids"?<hr/>:<></>} </li>
                    </ul>
                    <div className="navRight">
                        <Link to='/LoginSignup' ><button>Login</button></Link>
                        <Link to='/cart' ><img src={cart} alt="" /></Link>
                        <div className="cartitem">0</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;