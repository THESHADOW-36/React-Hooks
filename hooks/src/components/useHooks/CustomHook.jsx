import { useState } from 'react'

const useCustomHook = () => {
    const [count, setCount] = useState(0)

    function addOne() {
        setCount((add) => add + 1)
    }

    function subOne() {
        setCount((sub) => sub - 1)
    }

    function reset() {
        setCount(() => 0)
    }

    return [count, addOne, subOne, reset]
}

export default useCustomHook
