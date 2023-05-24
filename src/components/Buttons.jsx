import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./NavBar";

// import SearchAlert from "./Alert";
function SearchButton ({inputState}) {
    return (<button className={SearchButton} onClick={() => {
        alert(inputState)}} >Search</button>);
}
export default SearchButton

