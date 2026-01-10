import rainforest from "../assets/rainforest.png";

const brandStyle = {
  backgroundColor: "#93e4c1",
  borderRadius: "10px",
  padding: "8px",
};

function Header() {
  return (
    <div>
      <h1 className="display-2 pb-3">
        Welcome to <br />
        <span style={brandStyle} className="brand-font">
          QUETZAL GROVE BOOKS
        </span>
      </h1>
      <img src={rainforest} className="img-fluid rainforest" />
      <p className="lead fs-4 p-3">
        Where freedom is found between the pages 🦋
      </p>
    </div>
  );
}

export default Header;
