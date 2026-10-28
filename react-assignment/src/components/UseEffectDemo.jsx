import { useEffect } from "react";

function UseEffectDemo() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div className="card">
      <h2>Task 6: useEffect</h2>
      <p>Welcome to React</p>
    </div>
  );
}

export default UseEffectDemo;