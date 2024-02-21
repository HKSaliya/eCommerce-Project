import React from "react";
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_image from "../assets/hero_image.png"


const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero_inner">
                        <div className="heroLeft">
                            <h2>New Arrivals Only</h2>
                            <div className="hand">
                                <div className="handIcon">
                                    <p>new</p>
                                    <img src={hand_icon} alt="" />
                                </div>
                                <p>collection</p>
                                <p>for everyone</p>
                            </div>
                            <div className="heroLatest">
                                <div>Latest Collection</div>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                        <div className="heroRight">
                            <img src={hero_image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;