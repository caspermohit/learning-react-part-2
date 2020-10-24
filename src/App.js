import React,{useState} from 'react';
import './App.css';
//  import Nav from './components/Nav';
// import Tweets from './components/Tweets';

function App() {

  // write  javascript here
  const[counter, setCounter]= useState(0)
  const[ toggle, setToggle] = useState(false);

  const incrementer = ()=>{
 setCounter(counter +1);
 console.log(counter);

  };
  const toggler = () =>{
setToggle((prev) => !prev);
  };
 
  return (
    <div className="App">
  <h1 className={toggle ? "active" : ""}>hello react !!!!!</h1>
  <p>counter={counter}</p>
  <button onClick={incrementer}>click</button>
  <button onClick={toggler}>click me</button>
     
    </div>
  );
}

export default App;
