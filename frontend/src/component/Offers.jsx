import React from "react";
import exclusive_image from "../assets/exclusive_image.png"

const Offers = () => {
    return (
        <>
            <div className="offers">
                <div className="container">
                    <div className="offer_inner">
                        <div className="offerLeft">
                            <h1>Exclusive</h1>
                            <h1>Offers For You</h1>
                            <p>ONLY ON BEST SELLERS PRODUCTS</p>
                            <button>Check now</button>
                        </div>
                        <div className="offerRight">
                            <img src={exclusive_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offers;