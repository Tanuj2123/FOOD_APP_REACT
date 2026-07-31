

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNl1WcEr1Wv0VlscNKDZKcM-x0WkVFKNn2Zg&s"></img>
            </div>
            <h1 className="nav-title">Your food App</h1>
            <div className="nav-items">
                <ul className="nav-list">
                    <li className="list-item">Home</li>
                    <li className="list-item">About Us</li>
                    <li className="list-item">Contact us</li>
                    <li className="cart-item"><img className="cart-image" src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"></img></li>
                </ul>
            </div>
        </div>
    );
};


export default Header;