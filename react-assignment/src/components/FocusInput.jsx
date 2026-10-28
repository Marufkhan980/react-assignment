import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="card">
      <h2>Task 4: useRef Focus</h2>
      <input type="text" ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;