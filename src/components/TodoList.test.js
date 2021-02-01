import TodoList from "./TodoList";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { render, waitFor } from "@testing-library/react";
const mockAxios = new MockAdapter(axios);

describe("TodoList", () => {
  const userData = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ];

  beforeEach(() => {
    mockAxios.reset();
  });

  it("should render todo title", async () => {
    mockAxios
      .onGet("https://jsonplaceholder.typicode.com/todos")
      .reply(200, userData);

    const { getByText } = render(<TodoList />);

    await waitFor(() => getByText("delectus aut autem"));
    expect(getByText("delectus aut autem")).toBeInTheDocument();
  });
});
