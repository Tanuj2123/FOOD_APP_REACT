import { useState } from "react";

const SectionItems = ({menu,section,showItems})=>{


    if(showItems!==section){
        return;
    }
    
    return (
    <div>
        {menu[section].map(item => (
            <ul key={item.id}>
                <li><strong>{item.name}</strong></li>
                <li>₹{item.price}</li>
                <li>{item.description}</li>
                <li>⭐ {item.rating}</li>
            </ul>
            ))}
    </div>
    );
}

export default SectionItems;