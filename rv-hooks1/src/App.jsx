import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  // let count = 15;
  let addVAl = () => {
    if (count < 20){

    
    count = count + 1;

    // console.log(count);
    setCount(count)}
  }



  let removeVAl = () => {

    if (count > 0){

    
    count = count - 1;

    // console.log(count);
    setCount(count)}
  }

  return (
   <>
   <h1>
    Bhanu bhadouriya
   </h1>
   <h3>
    React Developer

   </h3>
   <h5>
    Counter : {count}
   </h5>
   
   <button onClick={addVAl}>Increase Count {count} </button> <br /> <br />
    <button onClick={removeVAl}>Decrease Count {count}</button>
   </>
  )
}

export default App
