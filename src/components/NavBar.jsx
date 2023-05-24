import React,{useState} from "react";
import ReactDOM from 'react-dom';
import SearchButton from "./Buttons";

function NavBar() {
    const [inputState,setInputState]=useState("");
    function handleInputChange(event){
       setInputState(event.target.value);
    }
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <input className="SearchBar" type='text' placeholder='Looking for something?' onChange={handleInputChange}></input>
        <SearchButton  inputState={inputState}/>
      </nav>
    );
  }

  export default NavBar;
