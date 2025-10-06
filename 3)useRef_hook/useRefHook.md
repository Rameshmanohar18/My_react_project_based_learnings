<!-- Use Ref in React- js -->

Create a reference to a DOM element or a value that persists across renders
without causing re-renders when updated. Example: Accessing an input field value
without re-rendering the component.

```jsx
import React, { useRef } from "react";
function TextInput() {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref="{inputRef}" type="text" />
      <button onClick="{focusInput}">Focus Input</button>
    </div>
  );
}
export default TextInput;
```

<!-- Use Ref in React- js -->
