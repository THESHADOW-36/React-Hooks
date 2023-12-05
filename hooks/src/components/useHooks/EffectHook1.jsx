import React, { useEffect, useState } from 'react'

const EffectHook1 = () => {
    const [num, setNum] = useState(0);

    function update() {
        setNum((num) => num + 1)
    }

    useEffect(() => {
        alert("useEffect - No Dependency")
    })
    return (
        <div>
            <h1>Num: {num}</h1>
            <button onClick={update}>Update</button>
        </div>
    )
}

export default EffectHook1
