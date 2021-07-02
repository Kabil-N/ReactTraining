
import React,{ useEffect, useState } from 'react';
import './App.css';
import ClassA from './components/classA';
import Counter from './components/Counter';
import UseRef from './components/UseRef';
import FancyInput from './components/FancyInput';
// import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
function App() {
  // return (
  //   <div>
  //     {/* <ClassA />
  //     <Counter /> */}
  //     {/* <FancyInput/> */}
  //     {/* <UseRef /> */}
  //     const delayedMessage = useDelayedMessage("foo", 1500);
  //     return <div>{delayedMessage}</div>;
  //   </div>
  // )
  const delayedMessage = useDelayedMessage("foo", 1500);
  return <div>{delayedMessage}</div>;
}

export default App;


const useDelayedMessage = (msg, delay) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMessage(msg);
    }, delay);
  });
  React.useDebugValue(message ? "Message Set" : "Message not set");
  return message;
};