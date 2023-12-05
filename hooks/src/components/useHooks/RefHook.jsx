import React, { useRef } from 'react'

const RefHook = () => {
    const refInput = useRef(null);

    function handleChange() {
        refInput.current.focus();
        refInput.current.style.display = "block"
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <input type="text" ref={refInput} style={{ display: 'none' }} />
            <button onClick={handleChange}>Click Here</button>
        </div>
    )
}

export default RefHook
