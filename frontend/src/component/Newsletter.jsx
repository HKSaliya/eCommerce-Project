import React from "react";

const Newsletter=()=>{
    return(
        <>
        <div className="newsletter">
            <div className="container">
                <div className="innernews">
                    <h1>Get Exclusive Offers On Your Mail</h1>
                    <p>Subscribe to out newsletter and stay updated</p>
                    <div className="email">
                        <input type="email" placeholder="Enter your email id..." />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Newsletter;