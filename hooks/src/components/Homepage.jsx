import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
    const router = useNavigate();
    return (
        <div>
            <h3 onClick={() => router("/state")} style={{ cursor: "pointer" }}>useState</h3>
            <h3 onClick={() => router("/reducer")} style={{ cursor: "pointer" }}>useReducer</h3>
            <h3 onClick={() => router("/ref")} style={{ cursor: "pointer" }}>useRef</h3>
            <h3 onClick={() => router("/effect1")} style={{ cursor: "pointer" }}>useEffect - No Dependency</h3>
            <h3 onClick={() => router("/effect2")} style={{ cursor: "pointer" }}>useEffect - Empty Dependency</h3>
            <h3 onClick={() => router("/effect3")} style={{ cursor: "pointer" }}>useEffect - Single Dependency</h3>
            <h3 onClick={() => router("/effect4")} style={{ cursor: "pointer" }}>useEffect - Multi Dependency</h3>
        </div>
    )
}

export default Homepage;