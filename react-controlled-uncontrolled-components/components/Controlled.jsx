import { useState } from "react";

function Controlled() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormData() {
    console.log("Form submitted");
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <div style={{ margin: "0.5em" }}>
          <input
            type="text"
            placeholder="Enter your full name"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ margin: "0.5em" }}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{ margin: "0.5em" }}
          type="button"
          onClick={handleFormData}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Controlled;
