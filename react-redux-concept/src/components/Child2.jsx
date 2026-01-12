const containerStyle = {
  border: "1px solid black",
  textAlign: "center",
  padding: "1em",
  margin: "1em",
  width: "100%",
};

function Child2() {
  return (
    <div style={containerStyle}>
      <p style={{ fontSize: "4em" }}>{}</p>
      <button onClick={() => {}}>Decrement</button>
    </div>
  );
}

export default Child2;
