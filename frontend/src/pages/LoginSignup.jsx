import React, { useRef } from "react";
import axios from 'axios';

const LoginSingup = () => {
    var name = useRef();
    var email = useRef();
    var password = useRef();

    const handleclick = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/insert',{
            "name":name.current.value,
            "email":email.current.value,
            "password":password.current.value
        })
            .then(function (response) {
                console.log(response.data);
                alert('success');
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    return (
        <>
            <div className="loginsignup">
                <div className="container">
                    <div className="inner_loginsingup">
                        <div className="signup">
                            <h1>Sign Up</h1>
                            <div className="inputs">
                                <input type="text" name="name" ref={name} placeholder="your name" required />
                                <input type="email" email="email" ref={email} placeholder="Email Address" required/>
                                <input type="password" password="password" ref={password} placeholder="Password" required/>
                            </div>
                            <div className="loginagree">
                                <input type="checkbox" required/>
                                <p>By continuing, I agree to the terms of use & privacy policy.</p>
                            </div>
                            <button onClick={handleclick} >Continue</button>
                            <p className="loginline" >Already have an account? <span>Login here</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSingup;