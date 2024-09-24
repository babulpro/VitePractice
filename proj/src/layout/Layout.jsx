import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div >
            <div className='bg-slate-200 p-1 flex justify-between mx-5'>
               <div>Brand name</div>
               <div>
                    <ul className='flex gap-3 '>
                            <li className={window.location.pathname==="/"?"text-red-700":"text-red-300"}> <Link to="/"  > home </Link></li>
                            <li className={window.location.pathname==="/about"?"text-red-700":"text-red-300"}> <Link to="/about">about  </Link></li>
                            <li className={window.location.pathname==="/help"?"text-red-700":"text-red-300"}> <Link to="/help">help</Link></li>
                            <li className={window.location.pathname==="/task"?"text-red-700":"text-red-300"}> <Link to="/task">task</Link></li>
                    </ul>
               </div>
                
            </div>
            <div className='my-4'>
                {children}
            </div>
            <div className='p-4 bg-slate-600 '>
                <h1>This is the footer section</h1>
            </div>
        </div>
    );
};

export default Layout;