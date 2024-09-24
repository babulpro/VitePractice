import React, { useState } from 'react';
import CreateTask from './CreateTask';
 

const ShowTask = ({data,mData2}) => {
    const [mdata,setmData]=useState('')
    const [id,setId]=useState('')

    
    const RemoveTask=(id,data)=>{
         const index = data.findIndex((v)=>v.id===id)
        data.splice(index,1)
        mData2(data)
       
          
    }
    const getData = (id, data) => {
        const task = data.find((v) => v.id === id);
        if (task) {
            setId(id);        
            setmData(task.mtask);   
        }
    }
    const updateData = (id) => {
        const updatedData = data.map((task) =>
            task.id === id ? { ...task, mtask: mdata } : task
        );
        mData2(updatedData);   
        setmData('');          
        setId('');             
    }
    
    

     

    
    return (
        <div className='w-full'>
             <h1>your task is here</h1>
             {data.length>0 ?(
                <ul>
                    {data.map((value,index)=>{
                        return <li key={index} className='bg-slate-500 mb-3 flex justify-between px-5'>{index+1}.{value.mtask}   <button onClick={()=> RemoveTask(value.id,data)}>Remove</button> <button  onClick={()=>getData(value.id,data)}>Update</button></li>
                    })}
                </ul>

             ):(
                <p>there is no data here</p>
             )}
             <input type="text" value={mdata} onChange={(e)=>setmData(e.target.value)} className='w-full bg-slate-200'/> <br/>
             <button onClick={(e)=>updateData(id)}>Update</button>
             
        </div>
    );f
};

export default ShowTask;