import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import "./index.css";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Header />
      <Hero />


      <div className="products">
        <Products />
      </div>
    </div>
  );
}

export default App;
