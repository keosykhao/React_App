import React, { Component } from 'react';

class Trivia extends Component {
    constructor(){
        super()
    }
    getTrivia = async (event) =>{
        event.preventDefault();
        console.log("cool")
        // variable for the url to live in
        const url = 'https://opentdb.com/api.php?amount=21&category=31&difficulty=medium&type=multiple'
        // use await to tell our function to wait for data
        const response = await fetch(url);
            const data = await response.json();
            console.log(data.results)}
            catch(err){
                console.log(err)
    }

    render() {
        
       
        return (
            <div>
                <button onClick={this.getTrivia}>Trivia</button>
                
            </div>
        );
    }
}

export default Trivia;