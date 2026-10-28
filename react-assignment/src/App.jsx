import Counter from "./components/Counter";
import ShowHide from "./components/ShowHide";
import InputValue from "./components/InputValue";
import FocusInput from "./components/FocusInput";
import UserObject from "./components/UserObject";
import UseEffectDemo from "./components/UseEffectDemo";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Assignment</h1>
      <Counter />
      <ShowHide />
      <InputValue />
      <FocusInput />
      <UserObject />
      <UseEffectDemo />
    </div>
  );
}

export default App;