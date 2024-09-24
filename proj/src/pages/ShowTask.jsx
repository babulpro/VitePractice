import React from 'react';
import CreateTask from './CreateTask';
 

const ShowTask = ({data,mData2}) => {

    
    const RemoveTask=(id,data)=>{
         const index = data.findIndex((v)=>v.id===id)
        data.splice(index,1)
        mData2(data)
       
          
    }


    
    return (
        <div className='w-full'>
             <h1>your task is here</h1>
             {data.length>0 ?(
                <ul>
                    {data.map((value,index)=>{
                        return <li key={index} className='bg-slate-500 mb-3 flex justify-between px-5'>{index+1}.{value.mtask}   <button onClick={()=> RemoveTask(value.id,data)}>Remove</button> <button >Update</button></li>
                    })}
                </ul>

             ):(
                <p>there is no data here</p>
             )}
             
        </div>
    );
};

export default ShowTask;