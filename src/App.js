import './App.css';
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <div>
        <h1>Trabalho DevOps - Somativa 02</h1>
        <p>Contador: <span data-testid="current-count" >{count}</span></p>
        
        <button 
          data-testid="button-increment-counter"
          onClick={incrementCount}>
            Incrementar Contador
        </button>

      </div>
    </div>
  );
}

export default App;
