import React, { useRef } from 'react'

function UseRef() {
    const inpt=useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inpt.current.focus();
        console.log(inpt);
      };
    return (
        <div>
            <input ref={inpt}></input>
            <button onClick={onButtonClick}>fakebtn</button>
        </div>
    )
}

export default UseRef
