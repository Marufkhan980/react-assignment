import { useState } from "react";

function ShowHide() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="card">
      <h2>Task 2: Show/Hide Text</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>Hello React</p>}
    </div>
  );
}

export default ShowHide;