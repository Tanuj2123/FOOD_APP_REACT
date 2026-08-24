import SectionItems from "./SectionItems";
import { useState } from "react";

const MenuItems = ({menu})=>{
    
    const [showSection,setShowSection] = useState('');

    return (
        <>
        {Object.keys(menu).map((section,index) => (
            <SectionItems key={section} menu={menu} section={section} showSection={showSection} setShowSection={setShowSection}/>
        ))}
        </>
    )
}



export default MenuItems;