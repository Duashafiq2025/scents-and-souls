import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import "./index.css";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import About from "./components/About";
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./components/AdminPage";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);
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
    alert(product.title + " added to cart!");
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
  function deleteItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  function clearCart() {
    setCart([]);
  }

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <>
            <Hero changePage={setPage} />
            <button
              className="add-product-home-btn"
              onClick={() => {
                if (user) {
                  setPage("admin");
                } else {
                  setPage("admin-login");
                }
              }}
            >
              + Add Products
            </button>
            <Products addToCart={addToCart} />
          </>
        );

      case "about":
        return <About changePage={setPage} />;

      case "cart":
        return (
          <Cart
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            deleteItem={deleteItem}
            clearCart={clearCart}
            user={user}
          />
        );
      case "admin-login":
        return <AdminLogin changePage={setPage} />;
      case "admin":
        return user ? <AdminPage /> : <AdminLogin changePage={setPage} />;

      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Header cart={cart} changePage={setPage} page={page} user={user} />

      <main>{renderPage()}</main>

      <Footer changePage={setPage} />
    </div>
  );
}

export default App;
