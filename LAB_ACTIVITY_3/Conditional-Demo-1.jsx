
import React from "react";
import './Demo.css'

//comparing functions
export function Greeting(){
    return(
        <h1>Hello! I am a standard function.</h1>
    );
}


export const ArrowGreeting = () => (
    <h1>Hello! I am an arrow function.</h1>
);

//function with an arrow function
export function ShinyButton() { 
    const handleClick = () => { 
        alert("You clicked me!");
} 
    return(
        <button onClick = { handleClick } > Click This Button ! </button>
    );
} 
