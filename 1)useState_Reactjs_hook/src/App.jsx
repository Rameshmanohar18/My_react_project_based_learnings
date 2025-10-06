import React, { useState } from "react";

// Javscript functions to define without using useState hook
// const App = () => {
//   let x = 1;

//   // function to increment the value of x

//   const handleAdd = () => {
//     x = x + 1;
//     console.log("x:", x);
//   };

//   return (
//     <div>
//       <h1> {x} </h1>
//       <button onClick={handleAdd}>Add</button>
//     </div>
//   );
// };

const App = () => {
  const [num, setNum] = useState(1);

  // let x = 1;

  const handleAdd = () => {
    // setNum(2);
    // setNum(num + 1);
    // setNum((prevNum) => prevNum + 1);
    setNum((currentValue) => {
      return currentValue + 1;
    });
    // useState function is used to update the state variable num
    // When we call setNum, React will re-render the component with the updated value of num
    // value 2 is passed to setNum function
  };

  console.log(num);

  return (
    <div>
      <h1> {num} </h1>
      <h2>Learning useState hook</h2>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;

// In the above code, we have created a variable x and initialized it to 1.
// We have also created a function handleAdd that increments the value of x by 1 and logs it to the console.
// When we click on the "Add" button, the handleAdd function is called, and the value of x is incremented and logged to the console.
// However, since x is not a state variable, React does not re-render the component when its value changes.
// Therefore, the updated value of x is not reflected in the UI. The UI will always display the initial value of x, which is 1.
// To make the UI reflect the updated value of x, we need to use the useState hook to create a state variable instead of a regular variable.

//

// Explanation of useEffect hook

// hooks are nothing but special Javascript functions which allow us to use react features in functional components
// useState is a hook that allows us to add state to functional components
// useEffect is a hook that allows us to perform side effects in functional components
// Side effects are operations that can affect other components and cannot be done during rendering, such as data fetching, subscriptions, or manually changing the DOM.
// useEffect accepts two arguments: a function that contains the side-effect logic, and an optional array of dependencies that determine when the effect should re-run.
// If the dependencies array is empty, the effect will only run once after the initial render. If the dependencies array contains variables, the effect will re-run whenever any of those variables change.
// The function passed to useEffect can optionally return a cleanup function that will be called when the component unmounts or before the effect runs again. This is useful for cleaning up subscriptions or timers to prevent memory leaks.

// function  useState () = >{
//   let num;
//    function update  (val)  {
//     num = val;
//     render();

//    }

//    return [num, update];
// }
// console.log(useState());

// const  [variable, setVariable] =  useState();

// console.log(variable, setVariable);

// useState will generally be first one is a variable and  second one is a  function and it will returns an array format this is actual syntax of useState

// useState will give an array with two values
// first value is the current state value
// second value is a function to update the state value

// when we call the update function with a new value, it will update the state value and re-render the component
