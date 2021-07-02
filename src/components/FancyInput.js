import { forwardRef, useImperativeHandle, useRef } from "react";

function FancyInput(props, ref) {
    console.log(props);
    console.log(ref);
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }

    }));
    return <div>
        <input ref={inputRef}/>
        <button onClick={inputRef.focus}>Click Me!</button>
        </div>;
  }
  FancyInput = forwardRef(FancyInput);

export default FancyInput;