import MenuItems from "../MenuItems"
import { fireEvent, render,screen } from "@testing-library/react"
import menu from "../../utils/restaurantMenuSeed";
import appStore from "../../utils/appStore";
import {Provider} from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

it("should load the restaurant menu component",()=>{
    render(<BrowserRouter><Provider store={appStore}>
        <Header/>
        <Cart/>
        <MenuItems menu={menu}/>
    </Provider></BrowserRouter>)

    const sectionDiv = screen.getAllByTestId("showSection");

    fireEvent.click(sectionDiv[0]);
    
    const addBtn = screen.getAllByTestId("addBtn");

    fireEvent.click(addBtn[0]);

    const cartBtn = screen.getByText("🛒-1");

    expect(cartBtn).toBeInTheDocument();

    const cartItems = screen.getAllByTestId("cartItem");

    expect(cartItems.length).toBe(1);


})