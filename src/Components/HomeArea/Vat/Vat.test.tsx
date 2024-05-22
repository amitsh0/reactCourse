import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { monetaryService } from "../../../Services/MonetaryService";
import { Vat } from "./Vat";

describe("Vat Component", () => {
  const component = <Vat />;
  //Render component before each test
  beforeEach(() => render(component));
  //Clean component after each test
  afterEach(() => cleanup());

  it("should render into DOM", () => {
    act(() => {
      const div = document.createElement("div");
      createRoot(div).render(component);
    });
  });

  it("should contain specific element", () => {
    expect(screen.getByText("VAT Calculator")).toBeDefined();
    expect(screen.getByPlaceholderText("price")).toBeDefined();
  });

  it("should caculate vat correctly", () => {
    const price = Math.floor(Math.random() * 1000);
    const percent = 17;
    const vat = monetaryService.getVat(price, percent);
    const input = screen.getByPlaceholderText("price");

    //performing "user event"
    userEvent.type(input, price.toString());
    
    const p = screen.getByTestId("resultParagraph"); //must to be in data-testid
    expect(p).toHaveTextContent(`${price} x ${percent}% = ${vat}`);
  });
});
