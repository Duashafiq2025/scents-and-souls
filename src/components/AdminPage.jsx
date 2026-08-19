import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function AdminPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function addProduct(event) {
    event.preventDefault();

    const { error } = await supabase.from("products").insert([
      {
        title: title,
        price: price,
        description: description,
        image_url: imageUrl,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product added successfully!");

    setTitle("");
    setPrice("");
    setDescription("");
    setImageUrl("");
  }

  return (
    <div className="admin-page">
      <h1>Add New Product</h1>

      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <textarea
          placeholder="Product description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminPage;
