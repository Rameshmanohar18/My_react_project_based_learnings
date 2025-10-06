import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User";

function App() {
  const [count, setCount] = useState(0);

  const userData = {
    name: "John Doe",
    age: 30,
    email: "rameshmanohar2001m@gmail.com",
    phoneNo: "7010251221",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    hobbies: [
      "reading",
      "traveling",
      "coding",
      "gaming",
      "music",
      "dancing",
      "swimming",
    ],
    isActive: true,
  };

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React applications</h1>

      <User
        // name={userData.name}
        // age={userData.age}
        // email={userData.email}
        // phoneNo={userData.phoneNo}
        // address={userData.address}
        // hobbies={userData.hobbies}
        // isActive={userData.isActive}
        {...userData}
        // Destructuring props
      />



      
      {/* <User userData={userData.name} age={userData.age} /> */}
      {/* <img src="/vite.svg" className="logo" alt="Vite logo" /> */}

      <div className="card">
        <h5>Click me!</h5>
        <button onClick={() => setCount((count) => count + 1)}>
          The Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
