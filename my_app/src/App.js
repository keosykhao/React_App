import React, { useState, useContext } from "react";
import './App.css';
import Main from './components/Main'
import Trivia from './components/Trivia';
import End from './components/End'
import { GameStateContext } from './Helper/Context'

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Trivia App</h1>
      <GameStateContext.Provider
        value={{gameState,
          setGameState,
          userName, setUserName,
          score, setScore
        }}>
      {gameState === "menu" && <Main />}
      {gameState === "trivia" && <Trivia />}
      {gameState === "end" && <End />}
        </GameStateContext.Provider>

    
    </div>
  );
}

export default App;
