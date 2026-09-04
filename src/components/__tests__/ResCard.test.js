import { render,screen } from "@testing-library/react"
import ResCard from "../ResCard"
import mockData from "../mocks/ResCard.mock.json";
import "@testing-library/jest-dom";

it("should load the props of the resCard",()=>{
    render(<ResCard resData = {mockData}/>)

    const name = screen.getByText("Swapna Tiffins and Meals");

    expect(name).toBeInTheDocument();
});