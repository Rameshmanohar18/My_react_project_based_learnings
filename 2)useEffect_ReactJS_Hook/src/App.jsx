// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);
  console.log("🥐 num1", num1);

  // array empty or not empty it is same for useEffect
  // If array is empty it will run only one time when component is mounted
  // If array is not empty it will run only one time when component is mounted and also when dependency value is changed

  useEffect(() => {
    setNum1(200);
    console.log("UseEffect called");
  }, [num1, num2]);

  // console.log two times because of React.StrictMode in main.jsx

  // Useeffect cleanup function
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Interval called");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup function called");
    };
  }, []);

  return (
    <div>
      <h3>Learning a useEffect hook with clean up function in React JS</h3>
      <h2>Count: {num1}</h2>
      <button onClick={() => setNum1((curr) => curr + 1)}>Increment</button>
      {/* Arrow function */}

      <h2>Count: {num2}</h2>
      <button onClick={() => setNum2((curr) => curr + 1)}>Increment</button>
    </div>
  );
};

export default App;
