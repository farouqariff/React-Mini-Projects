import { useState } from "react";
import "./App.css";
import ChangeName from "./ChangeName";

function App() {
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <h1>State and Prop</h1>
      <label htmlFor="username">Enter your name here:</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your fucking name"
        onChange={handleInput}
      />
      <p>
        Hi there, <span>{username}</span>
      </p>
      <ChangeName setUsername={setUsername} />
    </>
  );
}

export default App;
