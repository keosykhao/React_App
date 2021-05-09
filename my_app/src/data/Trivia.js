import React, { Component } from 'react';

class Trivia extends Component {
    render() {
        const url = 'https://opentdb.com/api.php?amount=21&category=31&difficulty=easy'
        fetch(url).then(response => response.json()).then(data => console.log(data));

        return (
            <div>
                
            </div>
        );
    }
}

export default Trivia;