import React ,{useEffect}from 'react';
import axios from 'axios';

const Auth = () => {

    useEffect(() => {

        const headers = {
        
            'authorization': localStorage.getItem("token")
          }
        axios.post("http://localhost:8080/api/auth/allData",{}, {
            headers: headers
          }).then(data=>{
         
           
        
        }).catch(err=>{
            console.log(err);
        })
        
            
            }, [])


    return (
        <div>
            <h1>Auth Component</h1>
        </div>
    )
}

export default Auth
