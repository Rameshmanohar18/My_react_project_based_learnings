```js
function user(props) {
  console.log(props.name);
}

User({
  name: "Ramesh",
  age: 24,
  phoneNo: "7010251221",
  email: "rameshmanohar2001m@gmail.com",
});

let { name, age, phoneNo, email } = user;

console.log(age);
```

<!-- Js destructuring is the easiest way to get a props data -->

