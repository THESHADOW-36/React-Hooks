import React from "react";
import useCustomHook from "./CustomHook";

const StateHook = () => {
    const [count, addOne, subOne, reset] = useCustomHook();
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>Add</button>
            <button onClick={reset}>Reset</button>
            <button onClick={subOne}>Sub</button>
        </div>
    )
}

export default StateHook;