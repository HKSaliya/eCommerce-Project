import React, { useRef, useState } from "react";
import logo from "../assets/logo.png"
import cart from "../assets/cart_icon.png"
import { Link } from "react-router-dom";
import nav_dropdown from "../assets/dropdown_icon.png";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown = (e) => {
        menuRef.current.classList.toggle('navmenu_visible');
        e.target.classList.toggle('open');
    }

    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="nav_inner">
                        <div className="navLeft">
                            <Link to={`/`}>
                                <img src={logo} alt="" />
                            <p>SHOPPER</p>
                            </Link>
                        </div>
                        <div className="menuouter">
                            <img onClick={dropdown} className="nav_dropdown" src={nav_dropdown} alt="" />
                            <ul ref={menuRef} className="menu">
                                <li onClick={() => { setMenu("shop") }} ><Link style={{ textDecoration: 'none' }} to='/' >Shop</Link> {menu == "shop" ? <hr /> : <></>} </li>
                                <li onClick={() => { setMenu("Men") }} ><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link> {menu == "Men" ? <hr /> : <></>} </li>
                                <li onClick={() => { setMenu("Women") }} ><Link style={{ textDecoration: 'none' }} to='/women' >Women</Link> {menu == "Women" ? <hr /> : <></>} </li>
                                <li onClick={() => { setMenu("Kids") }} ><Link style={{ textDecoration: 'none' }} to='/kid' >Kids</Link> {menu == "Kids" ? <hr /> : <></>} </li>
                            </ul>
                        </div>
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