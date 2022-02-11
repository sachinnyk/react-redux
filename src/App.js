import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrCounter, decrCounter } from "./store/actions/Actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header>Hello , Welcome to React {counter} </header>
      <button onClick={() => dispatch(incrCounter())}>Increment</button>
      <button onClick={() => dispatch(decrCounter())}>Decrement</button>
    </div>
  );
}

export default App;
