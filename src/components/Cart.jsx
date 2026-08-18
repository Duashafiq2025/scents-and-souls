import React from "react";

function Cart({ cart }) {
  return (
    <div className="cart-page">
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                src={product.image_url}
                alt={product.title}
                className="cart-image"
              />
              <div className="cart-details">
                <h2>{product.title}</h2>
                <p>Rs. {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Cart;
