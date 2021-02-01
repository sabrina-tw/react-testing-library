import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe("+1 button", () => {
  it("should increase the counter value by 1", () => {
    const { getByText } = render(<Counter />);
    const addOneButton = getByText("+1");
    fireEvent.click(addOneButton);
    expect(() => getByText("Counter Value: 0")).toThrowError();
    expect(getByText("Counter Value: 1")).toBeInTheDocument();
  });
});
