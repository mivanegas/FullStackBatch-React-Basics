const brandStyle = {
  backgroundColor: "#e8f9fd",
  borderRadius: "10px",
  padding: "5px",
};

function Header() {
  return (
    <div>
      <h1 className="display-2">
        Welcome to <span style={brandStyle}>Quetzal Grove Books</span>
      </h1>
      <p className="lead fs-4">Where freedom is found between the pages</p>
    </div>
  );
}

export default Header;
