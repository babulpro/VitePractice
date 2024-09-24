import React from 'react';

const Increment = ({handleInc,handleIncrement}) => {
    return (
        <div>
                <input type='number' value={handleInc} onChange={handleIncrement}/>

            
        </div>
    );
};

export default Increment;