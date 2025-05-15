import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductForm from "./pages/ProductSubmission";
import MyProducts from "./pages/MyProducts";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">Mini E-Commerce</h1>
          <div className="space-x-4">
            <Link
              to="/"
              className="hover:text-yellow-300 transition duration-200"
            >
              Product Submission
            </Link>
            <Link
              to="/my-products"
              className="hover:text-yellow-300 transition duration-200"
            >
              My Products
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<ProductForm />} />
          <Route path="/my-products" element={<MyProducts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
