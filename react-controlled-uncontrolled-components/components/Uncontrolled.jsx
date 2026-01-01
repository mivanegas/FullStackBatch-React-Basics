import { useRef } from "react";

function Uncontrolled() {
  const emailRef = useRef();
  const pwdRef = useRef();

  function handleFormData() {
    console.log("Form Submitted");
    console.log(emailRef.current.value);
    console.log(pwdRef.current.value);
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <div style={{ margin: "0.5em" }}>
          <input
            type="text"
            placeholder="Enter your full name"
            ref={emailRef}
          />
        </div>
        <div style={{ margin: "0.5em" }}>
          <input
            type="password"
            placeholder="Enter your password"
            ref={pwdRef}
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

export default Uncontrolled;
