import React, { Component } from 'react';

class Main extends Component {
    state = {trivia: ''};

    componentDidMount(){
        console.log('Component did mount')
    }

  






    render() {
        return (
            <div>
                <h1>Hi</h1>
                <button>Get Joke</button>
                
            </div>
        );
    }
}

export default Main;