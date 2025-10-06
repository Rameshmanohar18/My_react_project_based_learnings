Perfect timing ⚡ — `useRef` is one of those sneaky React hooks that feels simple but is secretly a Swiss-army knife.
It doesn’t re-render when updated, unlike `useState`, so it’s great for **storing values across renders**.

I’ll give you **5 practical `useRef` examples**, from beginner to advanced:

---

## 1. **Accessing a DOM element directly**

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // focus input without re-render
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```

📌 **Use case**: Manage focus or scroll without forcing state updates.

---

## 2. **Storing previous value (like `usePrevious`)**

```jsx
import { useEffect, useRef, useState } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

📌 **Use case**: Keep track of old values between renders.

---

## 3. **Storing interval ID (like a timer)**

```jsx
import { useRef, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

📌 **Use case**: Store `setInterval` ID to clear later, without re-renders.

---

## 4. **Avoid re-creating expensive objects**

```jsx
import { useRef } from "react";

function ExpensiveObject() {
  const heavyObjectRef = useRef({ createdAt: Date.now() });

  return (
    <div>
      <p>This object was created at: {heavyObjectRef.current.createdAt}</p>
      <button onClick={() => console.log(heavyObjectRef.current)}>
        Log Object
      </button>
    </div>
  );
}
```

📌 **Use case**: Prevent expensive object recreation on every render.

---

## 5. **Click outside to close dropdown**

```jsx
import { useEffect, useRef, useState } from "react";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setOpen((o) => !o)}>Toggle Menu</button>
      {open && (
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}
```

📌 **Use case**: Detect clicks outside an element for closing modals/menus.

---

⚡ Quick recap:

- `useRef` doesn’t trigger re-renders.
- Great for **DOM manipulation**, **persisting values**, **storing mutable variables**.
- If you want state that **does re-render the UI**, use `useState`.
