import React from 'react';

const Knowldge = ({title,arr=[],children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
            {
                arr.map((v,index)=>{
                    return (
                        <li key={index}>{v}</li>
                    )
                })
            }
            </ul>
            {children}
        </div>
    );
};

export default Knowldge; 