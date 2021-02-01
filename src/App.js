import "./App.css";
import Filter from "./components/Filter";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>React testing library</h1>
      <Filter />
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
