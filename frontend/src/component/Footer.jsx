import React from "react";
import footer_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pinterest_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"

const Footer=()=>{
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="inner_footer">
                    <div className="footerlogo">
                        <img src={footer_logo} alt="" />
                        <p>SHOPPER</p>
                    </div>
                    <ul className="flink" >
                        <li>Company</li>
                        <li>Products</li>
                        <li>Offices</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className="socialicon">
                        <div className="fsicon">
                            <img src={instagram_icon} alt="" />
                        </div>
                        <div className="fsicon">
                            <img src={pinterest_icon} alt="" />
                        </div>
                        <div className="fsicon">
                            <img src={whatsapp_icon} alt="" />
                        </div>
                    </div>
                    <div className="copyright">
                        <hr />
                        <p>Copyright @ 2024 - All Right Reserved</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;