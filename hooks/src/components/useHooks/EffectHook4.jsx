import React, { useEffect, useState } from 'react'

const EffectHook4 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    function update1() {
        setNum1((num) => num + 1)
    }

    function update2() {
        setNum2((num) => num + 1)
    }

    function update3() {
        setNum3((num) => num + 1)
    }

    useEffect(() => {
        alert("useEffect - Multi Dependency")
    }, [num1, num3])
    return (
        <div>
            <h1>Num: {num1}</h1>
            <button onClick={update1}>Update</button>
            <br />
            <br />
            <h1>Num: {num2}</h1>
            <button onClick={update2}>Update</button>
            <br />
            <br />
            <h1>Num: {num3}</h1>
            <button onClick={update3}>Update</button>
        </div>
    )
}

export default EffectHook4
