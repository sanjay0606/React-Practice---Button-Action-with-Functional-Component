import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [pvis,setpvis]=useState(true);
  return (
    <div id="main">
      <button id="click" onClick={()=>setpvis(false)}>show para</button>
      { (pvis) ? null: <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> }


    </div>
  );
}


export default App;
