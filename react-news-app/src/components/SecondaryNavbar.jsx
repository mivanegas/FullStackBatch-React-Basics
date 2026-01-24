import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";

function SecondaryNavbar() {
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      {/* Map the tabs to each category provided by the API */}
      {categories.map((category, index) => (
        <Nav.Item key={category}>
          <Nav.Link
            as={NavLink}
            to={`/categories/${category}`}
            id="category-tab"
          >
            {category[0].toUpperCase() + category.slice(1)}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
export default SecondaryNavbar;
