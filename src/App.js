import "./App.css";
import Filter from "./components/Filter";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React testing library</h1>
      <BrowserRouter>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/filter">Filter</NavLink>
        <NavLink to="/todolist">TodoList</NavLink>

        <Route path="/counter" component={Counter} />
        <Route path="/filter" component={Filter} />
        <Route path="/todolist" component={TodoList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
