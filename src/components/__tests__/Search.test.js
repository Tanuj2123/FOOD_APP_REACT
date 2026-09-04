import Body from "../Body";
import MOCK_DATA from "../mocks/ResList.mock.json";
import { BrowserRouter } from "react-router-dom";
import {fireEvent, render,screen} from "@testing-library/react"
import "@testing-library/jest-dom";
import { act } from "react";


global.fetch = jest.fn(()=>{
    return Promise.resolve({json:()=>{
        return Promise.resolve(MOCK_DATA);
    }})
});



it("should have search input and modify res cards for the given input(restaurant)",async ()=>{
   await act(async()=> render(<BrowserRouter><Body/></BrowserRouter>))

    const SearchInput = screen.getByTestId("searchInput");


    const Search = screen.getByTestId("search");

    fireEvent.change(SearchInput,{target:{value:"restaurant"}});

    fireEvent.click(Search);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(4);


})


it("should filter resCards based on rating",async ()=>{
    await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))

    const topRatedBtn = screen.getByTestId("topRatedBtn");

    const cardsBeforeClick = screen.getAllByTestId("resCard");

    expect(cardsBeforeClick.length).toBe(8);

    fireEvent.click(topRatedBtn);

    const cardsAfterClick = screen.getAllByTestId("resCard");

    expect(cardsAfterClick.length).toBe(4);

})
