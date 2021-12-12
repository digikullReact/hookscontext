import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Home from './Home';
import Header from './Header';
import AppContext from "./context"
import TextInputWithFocusButton from "./TextInputWithFocusButton"
import Paginate from './Paginate';


function App() {

  const [state,setState]=useState("State");

  const func=(data)=>{
    setState(data)

  }
  return (
    <div className="App">
    <Paginate/>
    
 
    </div>
  );
}

export default App;
