import React, { useContext } from 'react'
import { MyContext } from './GobalContext'

const ReducerHook = () => {

    const {state, increment, decrement, reset} = useContext(MyContext)

    return (
        <div>
            <h2>Count: {state}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div >
    )
}

export default ReducerHook
