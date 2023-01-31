
import './App.css';
import { Counter } from './Counter';
import { DisableButton } from './DisableButton/DisableButton';
import { MainPage } from './Page/MainPage';
import { UseContextHook } from './UseContextHook/Example1/UseContextHook';
import { UseContextHook2 } from './UseContextHook/Example2/UseContextHook2';
import { LoginContext, UseContextHook3 } from './UseContextHook/Example3/UseContextHook3';
import { Example4 } from './UseContextHook/Example4/Example4';
import { UseEffectExample1 } from './UseEffectExample1/UseEffectExample1';
import { UseEffectHook } from './UseEffectHook/UseEffectHook';
import { UseEffectHook2 } from './UseEffectHook/UseEffectHook2';
import { UseReducerExample } from './UseReducerExample/UseReducerExample';
import { PracticeUseReducer } from './UseReducerHook/PracticeUseReducer';
import { UseReducerHook } from './UseReducerHook/UseReducerHook';
import { UseStateExample } from './UseStateExample/UseStateExample';
import {UseStateHook} from "./UseStateHook/UseStateHook"

function App() {
  return (
    <div>
    
    <Counter/>
    </div>
  );
}

export default App;
