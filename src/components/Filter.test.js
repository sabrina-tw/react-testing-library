import { fireEvent, render, screen } from "@testing-library/react";
import Filter from "./Filter";

describe("Filter", () => {
  it("should only show filtered data that contains input string", () => {
    const { getByText, getByLabelText } = render(<Filter />);
    const dataFilterTextInput = getByLabelText("filter-text");
    fireEvent.change(dataFilterTextInput, {
      target: { value: "ap" },
    });

    expect(getByText("apple")).toBeInTheDocument();
    expect(getByText("apricot")).toBeInTheDocument();
    expect(() => getByText("orange")).toThrowError();
  });

  it("should render input box", () => {
    render(<Filter />);
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
  });
});
