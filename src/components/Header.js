import { useState } from "react";
import { LOGO_IMAGE_URL,CART_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [loginBtn,setloginBtn] = useState("login");
    return (
        <div className="flex justify-between m-4 bg-white">
            <div className="logo-container">
                <img className="w-24" src={LOGO_IMAGE_URL}></img>
            </div>
            <h1 className="text-4xl">Your food App</h1>
            <div className="nav-items">
                <ul className="flex">
                    <li className="m-4"><Link className="home-link" to="/">Home</Link></li>
                    <li className="m-4"><Link  className="about-link" to="/about">About Us</Link></li>
                    <li className="m-4"> <Link className="contact-link" to="/contact">Contact</Link> </li>
                    <li className="m-4"><Link className="grocery-link" to="/grocery">Grocery</Link></li>
                    <li className=""><img className="w-20" src={CART_IMAGE_URL}></img></li>
                    <li><button className="mt-4"
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