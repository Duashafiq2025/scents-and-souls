import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import "./index.css";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import About from "./components/About";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <>
            <Hero />
            <Products addToCart={addToCart} />
          </>
        );

      case "about":
        return <About />;

      case "cart":
        return (
          <Cart
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );

      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Header cart={cart} changePage={setPage} page={page} />

      <main>{renderPage()}</main>

      <Footer />
    </div>
  );
}

export default App;
