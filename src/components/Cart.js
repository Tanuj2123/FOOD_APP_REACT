import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";


const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    function handleClearCart(){
        dispatch(clearCart());
    }

    function handleRemoveItem(index){
        dispatch(removeItem(index));
    }

    return (
        <div className="text-center flex items-center flex-col m-4 p-4">
            <h1 className="font-bold text-2xl">Cart Page <span><button className=" text-lg bg-black text-white rounded-md mx-4 px-2" onClick={handleClearCart}>Clear Cart</button></span></h1>
            {cartItems.map((item,index)=>(
                <div data-testid="cartItem" key={item.id} className="rounded-xl w-4/12 m-4 p-4 items-center flex text-left justify-between bg-gray-300 border-black border-b-2">
                    <ul>
                        <li>{item.name}</li>
                        <li>₹{item.price}</li>
                        <li>{item.description}</li>
                        <li>⭐ {item.rating}</li>
                    </ul>
                    <span><button className="bg-black text-white rounded-xl px-2" onClick={()=>handleRemoveItem(index)}>Remove</button></span>
                </div>
            ))}
        </div>
    )
}


export default Cart;