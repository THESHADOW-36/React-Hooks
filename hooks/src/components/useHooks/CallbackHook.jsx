import React, { useState } from 'react'

const CallbackHook = () => {

    const [changeColor, setChangeColor] = useState(true)

    const themeChange = {
        backgroundColor: changeColor ? `white` : `black`,
        color: changeColor ? "black" : "white"
    }


    return (
        <div>
            <h1 style={themeChange}>Number</h1>
            <button>Update Num</button>
            <button onClick={() => setChangeColor(changeColor => !changeColor)}>Theme</button>
        </div>
    )
}

export default CallbackHook
