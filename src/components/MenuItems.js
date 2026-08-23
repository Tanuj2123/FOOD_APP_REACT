import SectionItems from "./SectionItems";
import { useState } from "react";

const MenuItems = ({menu})=>{
    
    const [showItems,setShowItems] = useState(null);


    return (
        <>
        {Object.keys(menu).map((section,index) => (
            <div key={section} className="rounded-xl my-4 bg-gray-200 w-4/6  border-b-2 border-black">
                <div>
                    <div className=" p-2 flex justify-between" onClick={()=>{
                        (showItems===section)?setShowItems(null):setShowItems(section)
                    }}>
                        <h2 className="font-bold">{section.toUpperCase()}</h2>
                        <span>🔽</span>
                    </div>
                    <SectionItems menu={menu} section={section} showItems={showItems}/>
                </div>
            </div>
        ))}
        </>
    )
}



export default MenuItems;