import Section1 from "../components/Section1";
import Student from "../components/Student";

function App() {
  let x = "Test";

  return (
    <>
      <h1>Welcome to React {x}</h1>
      <p>Today we'll learn about JSX, Components, and props</p>
      <hr />

      <Section1 />

      <Student count={1} name="Maria" batch={1} stack="Mern" />
      <Student count={2} name="Anne" batch={2} stack="Mevn" />
      <Student count={3} name="Jeff" batch={3} stack="Mean" />
    </>
  );
}

export default App;
