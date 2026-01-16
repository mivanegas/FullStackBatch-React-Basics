import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router";

// Making API call to display products
function Products({ cart, addToCart, products = [] }) {
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");

  //Removed cause moved to app.jsx
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // Set filtered products to category selected by user
  // useEffect(() => {
  //   if (category == "all") {
  //     setFilteredProducts(products);
  //   } else {
  //     setFilteredProducts(products.filter((p) => p.category == category));
  //   }
  // }, [category]);

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

  // Removed cause moved to app.jsx
  // async function fetchProducts() {
  //   try {
  //     // const res = await fetch("https://dummyjson.com/products");
  //     // Using Google Books API instead
  //     const res = await fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=new-york-times-bestseller&filter=paid-ebooks&orderBy=newest&maxResults=40&printType=books&key=${
  //         import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
  //       }`,
  //     );
  //     const data = await res.json();

  //     // Creating structure to make books the product
  //     const booksAsProduct = data.items.map((item) => ({
  //       id: item.id,
  //       title: item.volumeInfo.title,
  //       price: Number((Math.random() * 20 + 5).toFixed(2)), // Gives random prices btw $5-$20
  //       images: [
  //         item.volumeInfo.imageLinks?.thumbnail?.replace(
  //           "http://",
  //           "https://",
  //         ) || "placeholder.jpg",
  //       ],
  //       category: item.volumeInfo.categories?.[0] || "Uncategorized",
  //     }));

  //     // setProducts(data.products);
  //     // setFilteredProducts(data.products);

  //     setProducts(booksAsProduct);
  //     setFilteredProducts(booksAsProduct);

  //     // let productCategories = data.products.map((p) => p.category);
  //     let productCategories = booksAsProduct.map((p) => p.category);

  //     //   Filtering for unique values in the category array
  //     const uniqueCategories = [];
  //     productCategories.forEach((c) => {
  //       if (!uniqueCategories.includes(c)) {
  //         uniqueCategories.push(c);
  //       }
  //     });
  //     setCategories(uniqueCategories);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // Returning product cards + categories
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
                <Card.Img variant="top" src={product.images[0]} />
                <Card.Body>
                  <Card.Title style={{ minHeight: "48px" }}>
                    {product.title}
                  </Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    variant="danger"
                    className="me-1"
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
    </>
  );
}

export default Products;
