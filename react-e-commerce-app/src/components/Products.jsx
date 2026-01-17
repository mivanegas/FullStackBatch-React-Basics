import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router";
import quetzal from "../assets/quetzal.png";

// Making API call to display products
function Products({ cart, addToCart, products = [] }) {
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");

  // Set filtered products to category selected by user
  useEffect(() => {
    if (category == "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category == category));
    }
  }, [category]);

  // Update the product when props changes
  useEffect(() => {
    if (products.length) {
      setFilteredProducts(products);

      let productCategories = products.map((p) => p.category);
      const uniqueCategories = [];
      productCategories.forEach((c) => {
        if (!uniqueCategories.includes(c)) {
          uniqueCategories.push(c);
        }
      });
      setCategories(uniqueCategories);
    }
  }, [products]);

  // Returning product cards
  return (
    <>
      <div className="d-flex justify-content-end">
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "10em" }}
        >
          <option value="all">All</option>
          {/* Connecting API Categories with Dropdown */}
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category[0].toUpperCase() + category.slice(1)}
            </option>
          ))}
        </Form.Select>
      </div>
      <Row className="mt-5">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "18rem", margin: "1em auto" }}>
                <Card.Img
                  style={{ height: "160px", marginTop: "20px" }}
                  variant="top"
                  src={product.images[0]}
                />
                <Card.Body>
                  <Card.Title style={{ minHeight: "50px" }}>
                    {product.title && product.title.length > 48
                      ? `${product.title.slice(0, 48)}...`
                      : product.title}
                  </Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    variant="success"
                    className="me-3"
                    onClick={() => addToCart(product.id)}
                  >
                    {cart.includes(product.id)
                      ? "Added to cart"
                      : "Add to cart"}
                  </Button>
                  <Link to="/cart" className="btn btn-primary">
                    Checkout
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          // Creating a message in case out of stock
          <p className="lead">
            Sorry for the inconvenience, products are currently out of stock.
          </p>
        )}
      </Row>

      <div>
        <h5 className="mt-5">Return Policy</h5>
        <p>
          We want you to love every book you purchase from Quetzal Grove Books.
          If you're not completely satisfied with your order, you may return
          undamaged books within 30 days of purchase for a full refund or store
          credit. Books must be in original condition with no markings, damage,
          or signs of use. To initiate a return, please contact our customer
          service team with your order number. Return shipping costs are the
          responsibility of the customer unless the item arrived damaged or was
          sent in error. Refunds will be processed within 5-7 business days of
          receiving your return. Happy reading!
        </p>
        <img src={quetzal} alt="quetzal logo" width="45" height="45" />
      </div>
    </>
  );
}

export default Products;
