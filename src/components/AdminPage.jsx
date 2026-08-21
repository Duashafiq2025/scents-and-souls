import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function AdminPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function addProduct(event) {
    event.preventDefault();
     const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from("products").insert([
      {
        title: title,
        price: price,
        description: description,
        image_url: imageUrl,
        user_email: user.email,
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
      <h1>Scents and Souls</h1>

      <form onSubmit={addProduct}>
        <h2>Add a New Fragrance</h2>
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

        <button type="submit">Add Fragrance →</button>
      </form>
    </div>
  );
}

export default AdminPage;
