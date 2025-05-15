import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mini E-Commerce</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Product Submission</Link>
        <Link to="/my-products" className="hover:underline">My Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
