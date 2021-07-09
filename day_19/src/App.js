import './App.css';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <h3>There are 4 counter component instances that each manage their own state.</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
