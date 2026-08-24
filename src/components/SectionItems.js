import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const SectionItems = ({menu,section,showSection,setShowSection})=>{


    return(
        <div className="rounded-xl w-4/12 bg-gray-200 p-4 m-4 border-black border-b-2">
            <div className="flex justify-between" onClick={()=>{
                (showSection===section)?setShowSection(''):setShowSection(section);
            }}>
                <h1>{section}</h1>
                <span>🔽</span>
            </div>
            <SectionBody showSection={showSection} menu={menu} section={section}/>
        </div>
    )
}

const SectionBody = ({showSection,menu,section})=>{

    const dispatch = useDispatch();
    
    function handleAddItem(){

        dispatch(addItem("pizza"))
    }

    if(showSection!==section){
        return;
    }
    return (
        <div>
            {menu[section].map(item => (
            <ul key={item.id}>
                <li><strong>{item.name}</strong><span><button onClick={handleAddItem} className="px-2 mx-2 bg-black rounded-lg text-white">Add</button></span></li>
                <li>₹{item.price}</li>
                <li>{item.description}</li>
                <li>⭐ {item.rating}</li>
            </ul>
             ))}
        </div>
    )
}



export default SectionItems;