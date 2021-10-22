import React,{useContext} from 'react'
import  AppContext from './context';

function Home() {
    const  data = useContext(AppContext);

    const hello=()=>{
        data.func("33");
    }
  

    return (
        <div>
            
            <button onClick={hello}>
                Click
            </button>
        </div>
    )
}

export default Home
