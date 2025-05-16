# 🛒 Mini E-Commerce Product Submission App

This is a simple React + Tailwind CSS based product submission app for a mini e-commerce use case. It allows users to submit product details via a form, and upon successful submission, displays a modal and redirects the user to the "My Products" page.

---

## 🔧 Technologies Used

- **React** for building UI components
- **Tailwind CSS** for styling
- **Axios** for sending HTTP requests
- **React Router DOM** for navigation

---

## ✨ Features

- Product submission form with fields:
  - Product Name
  - Price
  - Description
  - Optional Image URL
- Styled using Tailwind CSS
- Sends product data to a backend API
- On success:
  - Shows a modal (Tailwind-based)
  - Redirects user to `/my-products` on clicking **OK**

---

## 📤 API Request

- **Endpoint**: `POST http://localhost:5000/api/products`
- **Payload**:
```json
{
  "name": "Example Product",
  "price": 100,
  "description": "A sample product",
  "image_url": "https://example.com/image.jpg"
}
