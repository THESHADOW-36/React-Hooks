import React, { useMemo, useState } from 'react'

export const MemoHook = () => {
    const [multi, setMulti] = useState(1)
    const [todo, setTodo] = useState([])

    // const multiBy2 = slowFunction(multi)

    const multiBy2 = useMemo(() => {
        return slowFunction(multi)
    }, [multi])
// add useRef hook and change the color also use useMemo hook

    function printTodo() {
        setTodo([...todo, "Todo"])
    }
    return (
        <div>
            <div>
                <h1>{multi}</h1>
                <button onClick={() => setMulti(multiBy2)}>Multi-2x</button>
            </div>

            <div>
                <button onClick={printTodo}>Print Todo</button>
                {todo.map((todo) => (
                    <h2>{todo}</h2>
                ))}
            </div>
        </div>
    )
}

function slowFunction(num) {
    for (var i = 0; i < 1000000000; i++) { }
    console.log("hello")
    return num * 2
}

