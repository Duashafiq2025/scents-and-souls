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
    setCart([...cart, product]);
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
        return <Cart cart={cart} />;

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
