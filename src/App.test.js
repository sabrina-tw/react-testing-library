import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders header", () => {
    render(<App />);
    const headerText = screen.getByText(/react testing library/i);
    expect(headerText).toBeInTheDocument();
  });
});

describe("NavLinks", () => {
  it("should render Filter component when filter link is clicked", () => {
    const { getByText, getByTestId } = render(<App />);
    const filterLink = getByText("Filter");

    fireEvent.click(filterLink);
    expect(getByTestId("filter")).toBeInTheDocument();
  });

  it("should render Counter component when counter link is clicked", () => {
    const { getByText, getByTestId } = render(<App />);
    const counterLink = getByText("Counter");

    fireEvent.click(counterLink);
    expect(getByTestId("counter")).toBeInTheDocument();
  });
});
