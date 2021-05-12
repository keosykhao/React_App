// this is a for the number of the question which will be used in the quiz component

import React from 'react';

function Questnum(props) {
    return (
        <div>
            <h3>Question # {props.index} </h3>
        </div>
    );
}

export default Questnum;