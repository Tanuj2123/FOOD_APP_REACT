import Header from "../Header";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";



it("should have a login Button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByText("login");

    expect(loginButton).toBeInTheDocument();
});

it("should have 0 items in cart",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("🛒-0");

    expect(cartItems).toBeInTheDocument();   
})

it("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button",{name:"login"});

    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button",{name:"logout"});

    expect(logoutButton).toBeInTheDocument();

})