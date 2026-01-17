import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import quetzal from "../assets/quetzal.png";
import Alert from "react-bootstrap/Alert";

function Cart({ cart, products = [], removeFromCart }) {
  // const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [show, setShow] = useState(false); // setting to false so alert shows when clicked
  const deliveryCharge = 10;

  useEffect(() => {
    setCartProducts(products.filter((p) => cart.includes(p.id)));
  }, [products, cart]);

  useEffect(() => {
    let sum = 0;
    cartProducts.forEach((cp) => {
      sum += parseFloat(cp.price);
    });
    setSubTotal(sum.toFixed(2));
  }, [cartProducts]);

  // Product card
  return (
    <div>
      <h2 className="display-6">Cart items</h2>
      <Row className="mt-4">
        {cartProducts.length ? (
          cartProducts.map((product) => (
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
                    variant="danger"
                    className="me-1"
                    onClick={() => removeFromCart(product.id)}
                  >
                    {cart.includes(product.id)
                      ? "Remove from cart"
                      : "Add to cart"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="lead">No products in the cart</p>
        )}
      </Row>

      {/* Summary Card */}
      {Boolean(cart.length) && (
        <>
          <Card
            className="mt-2"
            style={{ width: "18rem", margin: "auto", textAlign: "left" }}
          >
            <Card.Body>
              <Card.Title>Summary</Card.Title>
              <Card.Text>Total number of items: {cart.length}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${subTotal}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Delivery charges:</span>
                <span>${deliveryCharge.toFixed(2)}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>Total:</span>
                <span>
                  ${(parseFloat(subTotal) + deliveryCharge).toFixed(2)}
                </span>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body style={{ textAlign: "right" }}>
              <Alert show={show} variant="success">
                <Alert.Heading>Order Confirmed! 🎉</Alert.Heading>
                <p>
                  Thank you for supporting Quetzal Grove Books 🦋! Your order
                  has been successfully placed and will be shipped in 3-5
                  business days. Your confirmation code is: QGB-7K4M2XP
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow(false)} variant="success">
                    Close me
                  </Button>
                </div>
              </Alert>

              {!show && (
                <Button variant="success" onClick={() => setShow(true)}>
                  Proceed to Purchase
                </Button>
              )}
            </Card.Body>
          </Card>

          <div>
            <h5 className="mt-5">Return Policy</h5>
            <p>
              We want you to love every book you purchase from Quetzal Grove
              Books. If you're not completely satisfied with your order, you may
              return undamaged books within 30 days of purchase for a full
              refund or store credit. Books must be in original condition with
              no markings, damage, or signs of use. To initiate a return, please
              contact our customer service team with your order number. Return
              shipping costs are the responsibility of the customer unless the
              item arrived damaged or was sent in error. Refunds will be
              processed within 5-7 business days of receiving your return. Happy
              reading!
            </p>
            <img src={quetzal} alt="quetzal logo" width="45" height="45" />
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
