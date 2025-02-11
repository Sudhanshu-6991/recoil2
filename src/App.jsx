import React, { memo, useEffect, useState } from 'react';
import './App.css'
import { counterAtom } from './store/atoms/counter';

function App() {
  console.log(React);
  return (
    
     <Counter />
    
  )
}

function Counter() {
  const [count, setcount] = useState(0);

   useEffect(()=>{
    setInterval(()=>{
      
      setcount(c=>c+1)
      console.log('re-render');
    },3000)
   },[]);

  return <div>
    <CurrentCount />
    <Increase  />
    <Decrease  />
  </div>
}



const CurrentCount = memo(function () {
  
  return <div>
    Hi 
  </div>
})

const Decrease = memo(function () {

  

  return <div>
    <button >Decrease</button>
  </div>
})


const Increase = memo(function () {

  

  return <div>
    <button >Increase</button>
  </div>
})

export default App
