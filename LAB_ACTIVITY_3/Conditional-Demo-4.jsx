
import React from 'react';
import './Demo.css'
function Rainy(){ 
    return(
    <h1 className='demo2'>
        Bring your umbrella!
    </h1>
    );
}

function Sunny(){ 
    return(
    <h1 className='demo3'>
        Bring your sunglasses!
    </h1>
    );
}

const isRainy = false;
function RainOrShine(props) { 
    const isRainy = props.isRainy; 
    
    return isRainy ? <Rainy/> : <Sunny/>;
}
export default function Application3(){
    return(
        <div className={`${isRainy ? 'dark' : 'light'}`}>
            <RainOrShine isRainy={isRainy}/>
        </div>
    )
}