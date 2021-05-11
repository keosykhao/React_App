import React, { Component, useContext } from 'react';
import  { GameStateContext } from "../Helper/Context"



function Main() {
        const { gamestate, setGameState, userName, setUserName  } =
        useContext(GameStateContext)



    return (
        <div className="Menu">
            <label>Enter Name: </label>
            <input type="text" placeholder="name" onChange={ (event) => {setUserName(event.target.value);}}/>
            <button onClick={ () => { setGameState("playing"); }}>
                Start Quiz
            </button>
            
        </div>
    );
}

export default Main;