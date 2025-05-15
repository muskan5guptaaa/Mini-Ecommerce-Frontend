import React, { useEffect, useState } from "react";
import axios from "axios";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://mini-ecommerce-backend-fn3m.onrender.com/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filteredProducts = products.filter((product) =>
    (product.name + product.description)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Products</h2>
      <input
        type="text"
        placeholder="Search by name or description..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded mb-4 shadow-sm flex gap-4 items-start"
        >
          {product.image_url && (
            <img
              src={product.image_url}
              alt={product.name}
              className="w-32 h-32 object-cover rounded"
            />
          )}
          <div>
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-700 font-medium">
              ${Number(product.price).toFixed(2)}
            </p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;



