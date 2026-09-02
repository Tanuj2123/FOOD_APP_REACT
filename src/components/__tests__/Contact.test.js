import Contact from "../Contact"
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"


describe("contact us page test cases",()=>{
    it("should load contact us Page",()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument()
    })

    it("should have 2 input(textBoxes) in contact us page",()=>{

        render(<Contact/>);

        const inputBoxes = screen.getAllByRole("textbox");

        expect(inputBoxes.length).toBe(2)
    })
})