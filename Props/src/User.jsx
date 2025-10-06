import React from "react";

// Without destructuring props
// const User = (props) => {
//   return (
//     <div>
//       User
//       <h3>{props.name}</h3>
//       <h3>{props.age}</h3>
//       <h3>{props.phoneNo}</h3>
//       <h3>{props.email}</h3>
//       <h3> {props.hobbies} </h3>
//       {/* <h3> {props.address} </h3> */}
//     </div>
//   );
// };

// Destructuring props

const User = ({ name, age, phoneNo, email, hobbies }) => {
  return (
    <div>
      User
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{phoneNo}</h3>
      <h3>{email}</h3>
      <h3> {hobbies} </h3>
    </div>
  );
};

// props values can be of any data type
// can be string, number, boolean, object, array, function cant be changed from inside the component
// can be passed to child components
// one way data binding in react props are read only
export default User;
