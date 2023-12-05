import React, { createContext, useReducer } from 'react'

export const MyContext = createContext();

const initialState = 0

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return (state + 1)
        case "DECREMENT":
            return (state - 1)
        case "MULTI":
            return (state * 2)
        case "RESET":
            return (0)
        default:
            return state;
    }
}


const GobalContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function increment() {
        dispatch({ type: "INCREMENT" })
    }
    function decrement() {
        dispatch({ type: "DECREMENT" })
    }
    function reset() {
        dispatch({ type: "RESET" })
    }


    return (
        <MyContext.Provider value={{ state, increment, decrement, reset }}>
            {children}
        </MyContext.Provider>
    )
}

export default GobalContext
