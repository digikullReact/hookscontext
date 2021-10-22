import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Home from './Home';
import Header from './Header';
import AppContext from "./context"

function App() {

  const [state,setState]=useState("State");

  const func=(data)=>{
    setState(data)

  }
  return (
    <div className="App">
      <AppContext.Provider value={{state:state,func:func}}>
      <Home />
      <Header/>
      </AppContext.Provider>
    
 
    </div>
  );
}

export default App;
