import Counter from "./components/Counter";
import RandomNumber from "./components/RandomNumber";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>React Utility Dashboard</h1>
        <p>Practice React state management and event handling</p>
      </header>

      <main className="dashboard">
        <Counter />
        <RandomNumber />
      </main>
    </div>
  );
}

export default App;