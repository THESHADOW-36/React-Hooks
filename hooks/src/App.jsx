// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import StateHook from './components/useHooks/StateHook';
import EffectHook1 from './components/useHooks/EffectHook1';
import EffectHook2 from './components/useHooks/EffectHook2';
import EffectHook3 from './components/useHooks/EffectHook3';
import EffectHook4 from './components/useHooks/EffectHook4';
import ReducerHook from './components/useHooks/ReducerHook';
import RefHook from './components/useHooks/RefHook';
import CallbackHook from './components/useHooks/CallbackHook';
import { MemoHook } from './components/useHooks/MemoHook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/state" element={<StateHook />} />
        <Route exact path="/effect1" element={<EffectHook1 />} />
        <Route exact path="/effect2" element={<EffectHook2 />} />
        <Route exact path="/effect3" element={<EffectHook3 />} />
        <Route exact path="/effect4" element={<EffectHook4 />} />
        <Route exact path="/reducer" element={<ReducerHook />} />
        <Route exact path="/ref" element={<RefHook />} />
        <Route exact path="/memo" element={<MemoHook />} />
        <Route exact path="/callback" element={<CallbackHook />} />
      </Routes>
    </div>
  );
}

export default App;
