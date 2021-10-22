import {useRef,useState,useEffect} from "react";

import axios from "axios";

function TextInputWithFocusButton() {



    const  style={
        backgroundColor:"green"
    }

    const  style2={
        backgroundColor:"yellow"
    }

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(data=>{

        }).catch(err=>{
            
        })

        async function foo(){
            try{
              const something=  await axios.get("https://jsonplaceholder.typicode.com/todos/1");
              console.log(something.data);
              setState(something.data);

            }
            catch(err){

                console.log(err);

            }

        }

        foo();


    }, [])
    const [state,setState]=useState();
    const inputEl = useRef(null);
    const divRef = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };

    // refs are basically used to access real dom elements from react 

    const handleClick=()=>{

    setState("hi");
        //document.getElementById("div").style.backgroundColor=state
        //inputEl.current.value=""
       divRef.current.style.backgroundColor=state;
       divRef.current.style.height="300px";


    }

    const handleChange=(event)=>{
        setState(event.target.value);

    }
    return (
      <>
        <input ref={inputEl}  value={state} type="text"  onChange={handleChange}/>
        
        <div style={state?style:style2} ref={divRef}  id="div">
    <h1>HEllo</h1>

        </div>

    <button onClick={handleClick}>Focus the input</button>
      </>
    );
  }
  
  export default TextInputWithFocusButton;