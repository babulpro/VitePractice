import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import CreateTask from '../pages/CreateTask';
import shortid from 'shortid';
import ShowTask from '../pages/ShowTask';

const Task = () => {
    let [task,setTask]=useState([])

    
   const mData=(mtask)=>{
    const taskObj={
        mtask,
        id:shortid(),
        createdAd:new Date()

    }
   
     
     setTask([taskObj,...task])
   }
    
   const mData2=(dataObj)=>{
     
     
     setTask([...dataObj])
   }
      
    
   
    return (
        <Layout>
            <div className=' w-2/3 m-auto'>
            <h1>Yout Task Is Here</h1>
            <CreateTask  mData={mData} />
            <ShowTask data={task} mData2={mData2}/>
        </div>
        </Layout>
    );
};

export default Task;