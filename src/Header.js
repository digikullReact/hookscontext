import React,{useContext} from 'react'
import  AppContext from './context';


function Header() {

    const  data = useContext(AppContext);

    return (
        <div>
            <h1>{data.state}</h1>
            
        </div>
    )
}

export default Header
