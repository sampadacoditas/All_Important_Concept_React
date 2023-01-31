
import './App.css';
import { MainPage } from './Page/MainPage';
import { UseContextHook } from './UseContextHook/Example1/UseContextHook';
import { UseContextHook2 } from './UseContextHook/Example2/UseContextHook2';
import { LoginContext, UseContextHook3 } from './UseContextHook/Example3/UseContextHook3';
import { UseEffectHook } from './UseEffectHook/UseEffectHook';
import { UseEffectHook2 } from './UseEffectHook/UseEffectHook2';
import { PracticeUseReducer } from './UseReducerHook/PracticeUseReducer';
import { UseReducerHook } from './UseReducerHook/UseReducerHook';
import {UseStateHook} from "./UseStateHook/UseStateHook"

function App() {
  return (
    <div>
    {/* <MainPage/> */}
    {/* <UseStateHook/> */}
    {/* <UseReducerHook/> */}
    {/* <PracticeUseReducer/> */}
    {/* <UseContextHook/> */}
    {/* <UseContextHook2/> */}
    {/* <UseContextHook3/> */}
    {/* <UseEffectHook/> */}
    {/* <UseEffectHook2/> */}
    <UseContextHook3/>
    </div>
  );
}

export default App;
