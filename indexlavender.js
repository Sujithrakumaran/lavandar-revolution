import React from "react";
import ReactDOM  from "react-dom";
import "./style.css";
import Image from"./Image"; 
import Navbar from "./Navbar";
import About from "./About";




function App(){
  return(
    <>
    <Navbar />
    <Image />
    <About />

    </>
  )
}




const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);