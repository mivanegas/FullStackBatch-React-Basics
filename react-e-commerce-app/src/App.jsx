import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import LandingPage from "./pages/Landing";
import CartPage from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  function addToCart(productId) {
    setCart([...cart, productId]);
  }

  // New Book API - fetching product data
  useEffect(() => {
    fetchProducts();
  }, []);

  // Calling the API
  async function fetchProducts() {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=new-york-times-bestseller&filter=paid-ebooks&orderBy=newest&maxResults=40&printType=books&key=${
          import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
        }`,
      );
      const data = await res.json();

      // Creating structure to make books the product
      const booksAsProduct = data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        price: (Math.random() * 20 + 5).toFixed(2), // Gives random prices btw $5-$20
        images: [
          item.volumeInfo.imageLinks?.thumbnail?.replace(
            "http://",
            "https://",
          ) || "placeholder.jpg",
        ],
        category: item.volumeInfo.categories?.[0] || "Uncategorized",
      }));

      setProducts(booksAsProduct);
    } catch (error) {
      console.log(error);
    }
  }

  function removeFromCart(productId) {
    setCart(cart.filter((id) => id !== productId));
  }

  return (
    <BrowserRouter>
      <NavbarComponent cart={cart} />
      <Container className="text-center my-5">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                cart={cart}
                addToCart={addToCart}
                products={products}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                products={products}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
