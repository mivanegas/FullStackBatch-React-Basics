import Header from "../components/Header";
import Products from "../components/Products";

function Landing({ cart, addToCart, products }) {
  return (
    <div>
      <Header />
      <hr />
      <Products cart={cart} addToCart={addToCart} products={products} />
    </div>
  );
}

export default Landing;
