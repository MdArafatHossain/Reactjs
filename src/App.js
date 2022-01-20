import React, {useState} from 'react';
import './index.css'
const App = () => {
  const [count, setCount] = useState (0)
  return (
    <div className="conatiner my-5">
    <div className="card">
      <div className="card-body">
        <h1>Counter app</h1>
      </div>
      <div className= "my-5">
        <h2 className="my-5">{count}</h2>
        <button className="btn btn-success mx-3"
         onClick = {() => 
              setCount(count + 1)}>
           Increment
           </button>
        <button className="btn btn-danger mx-3"
          onClick = {() => 
          setCount(count - 1)}>
            Decrement
            </button>
        <button className="btn btn-secondary mx-3"
        onClick={() => setCount(0)}>
        
          Reset
          </button>
      </div>
    </div>
      
    </div>
  );
}

export default App;
