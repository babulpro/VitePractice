import React from 'react';

const DecrementBtn = ({decrement}) => {
    return (
        <div>
            <button onClick={decrement}>Decrement</button>
            
        </div>
    );
};

export default DecrementBtn;