import React, { useState } from "react";
import './App.css';
import Main from './components/Main'
import Trivia from './data/Trivia';
import End from './components/End'

function App() {
  const [gameState, setGameState] = useState("menu")
  return (
    <div className="App">
      <h1>Trivia App</h1>

     <Main />
     <Trivia />
    </div>
  );
}

export default App;
