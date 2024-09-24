import React from 'react';

const FormLevel = ({label,text,type}) => {
    return (
        <div >
             <label htmlFor={text}>{label}</label><br/>
             <input className='w-full bg-slate-50 rounded-sm' type={type} name={text}></input><br/>
        </div>
    );
};

export default FormLevel;