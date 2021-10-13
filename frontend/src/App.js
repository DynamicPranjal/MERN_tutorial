import "./App.css";

function App() {
  const hello = 1;
  return (
    <div>
      <div className="App">Hello World {hello}</div>;
      <div className="App">Hello World {hello + 1}</div>;
    </div>
  );
}

export default App;
