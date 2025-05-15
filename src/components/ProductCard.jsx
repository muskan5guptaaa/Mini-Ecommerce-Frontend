import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      {product.image_url && <img src={product.image_url} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />}
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <p className="text-sm text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductCard;
