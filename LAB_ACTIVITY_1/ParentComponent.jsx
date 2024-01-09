import React, {useState} from 'react'
import ChildComponent  from "./ChildComponent";

function ParentComponent() {
    const [message, setMessage] = useState("Hello from parent!");
  return (
    <ChildComponent message={message}/>
  )
}

export default ParentComponent