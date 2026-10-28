import { useState } from "react";

function InputValue() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleShow = () => {
    setDisplayText(text);
  };

  return (
    <div className="card">
      <h2>Task 3: Input Value</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleShow}>Show Value</button>
      <p>You typed: {displayText}</p>
    </div>
  );
}

export default InputValue;