import React, { useState } from 'react';
import Layout from '../layout/Layout';
import Knowldge from '../components/Knowldge';
import Help from './Help';

const Home = () => {
    const [name,setName]= useState('sadman')
    const data= [
        {
            name:"abir",
            email:"abir@gmail.com"
        },
        {
            name:"sadman",
            email:"sadman@gmail.com"
        },
        {
            name:"amir",
            email:"amir@gmail.com"
        }
    ]

    // setTimeout(()=>{
    //     setName("saddam")

    // },10*1000)

    
     let kno = ["i am babul","how are you"]
    return (
        <div>
            
            <Layout>
                
                <div>
                    {/* {data.length>0 && (
                        <ul>
                           { data.map((v)=>{
                                return(
                                    <li>{v.name} and the email is:{v.email}</li>
                                )

                            })}
                        </ul>
                    )} */}

                    {data.length > 0? (<ul>
                         {data.map((value)=>{
                           return <li>{value.email}</li>
                         })}
                    </ul>)
                    
                    :(<p>There is no data</p>) }

                     

                    {/* {name ?(<h1>hello {name} ,i am home page</h1>):(<h1>hello guest,i am home page</h1>)} */}


{/* -----------------------shortcircut evolution --------------------- */}

                    {/* <h1>Hello {name?name:"Guest"}, how are your?</h1>
                    <p> {name && `how are you dear ${name}?`} </p> */}

                    {/* {
                        name &&`hello ${name}`
                    }
                    {!name && `hello guest`} */}
                </div>
                
                <h1 className={"ActiveLink"}>
                
                I am home pages</h1>
            <Knowldge title={"Education"} arr={kno}/>
            </Layout>
             
        </div>
    );
};

export default Home;