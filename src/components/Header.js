import { useState } from "react";
import { LOGO_IMAGE_URL,CART_IMAGE_URL } from "../utils/constants";


const Header = ()=>{

    const [loginBtn,setloginBtn] = useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMAGE_URL}></img>
            </div>
            <h1 className="nav-title">Your food App</h1>
            <div className="nav-items">
                <ul className="nav-list">
                    <li className="list-item">Home</li>
                    <li className="list-item">About Us</li>
                    <li className="list-item">Contact us</li>
                    <li className="cart-item"><img className="cart-image" src={CART_IMAGE_URL}></img></li>
                    <li><button className="login"
                                onClick={()=>{
                                    loginBtn==="login"?setloginBtn("logout"):setloginBtn("login");
                                }}
                    >{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    );
};


export default Header;