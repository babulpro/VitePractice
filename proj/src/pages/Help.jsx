import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Knowldge from '../components/Knowldge';
import Display from '../components/Display';
import IncrementBtn from './../components/IncrementBtn';
import DecrementBtn from '../components/DecrementBtn';
import Increment from '../components/Increment';

const Help = () => {
    let [count,setCount] = useState(0)
    let [handleInc,setHandleInc]=useState(2)
    let [handleDec,setHandleDec]=useState(2)

    const increMent = ()=>{
        setCount(prev=>prev+handleInc)
    }
    const decreMent = ()=>{
        setCount(prev=>prev-handleDec)
    }
    const handleIncrement=(e)=>{
        setHandleInc(parseInt(e.target.value))

    }
    const handleDecrement=(e)=>{
        setHandleDec(parseInt(e.target.value))

    }

    return (
        <div>
            <Layout>
                 
               <div className='w-2/3 m-auto p-3 bg-slate-300'>
               <Display count={count}></Display>
                <Increment handleInc={handleInc} handleIncrement={handleIncrement}/> <br />
                <input type='number' value={handleDec} onChange={handleDecrement}/>
                <IncrementBtn increment={increMent}/>
                <DecrementBtn decrement={decreMent}></DecrementBtn>
                 
               </div>
            <h1>I am help pages</h1>
            <Knowldge title={"Knowldge"} arr={["hello babul","how are you?"]}> Its ok  FOr you</Knowldge>

            </Layout>
        </div>
    );
};
 
export default Help;