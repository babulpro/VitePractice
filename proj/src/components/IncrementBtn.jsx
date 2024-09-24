import React from 'react';

const IncrementBtn = ({increment}) => {
    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default IncrementBtn;