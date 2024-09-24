import React, { useState } from 'react';
import shortId from 'shortid'
const CreateTask = ({mData}) => {
    let [mTask,setMTask]=useState("")
     
 
 
     

    return (
        <div>
            <input className='border' required={true} value={mTask} onChange={(e)=>setMTask(e.target.value)} type='text' placeholder='Enter your task'/><br/>
            <button onClick={()=>{
                if(mTask){
                    mData(mTask);
                    setMTask('')
                }
                else{
                    alert("invalid data")
                }
            }}>Add Here</button>
        </div>
    );
};

export default CreateTask;