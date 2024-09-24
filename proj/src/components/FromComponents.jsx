import React from 'react';
import FormLevel from './FormLevel';

const FromComponents = () => {
    return (
        <div>
             <form>
                
                <FormLevel label={"Enter your name" }text={"name"} type={"name"}/>
                <FormLevel  label={"Enter your email" }text={"email"} type={"email"}/>
                <FormLevel label={"Enter your password" }text={"password"} type={"password"}/>
                <button type='submit'>Submit here</button>
 
             </form>
        </div>
    );
};

export default FromComponents;