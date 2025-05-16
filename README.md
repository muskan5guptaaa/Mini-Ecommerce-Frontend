# 🛒 Mini E-Commerce Product Submission App

A minimal full-stack e-commerce application that allows users to submit product details through a form and view them on a separate page. Built with **React (Vite)** and styled using **Tailwind CSS** on the frontend, and **Node.js + Express + MongoDB** on the backend.

---

## 🚀 Setup Instructions – Run Locally

### 🖥 Backend

1. Open terminal and navigate to your `backend` folder:
   ```bash
   cd backend
2. Install all dependencies:
  ```bash
  npm install
```
3. Create a .env file in the backend root with:
  ```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
Start the backend server:
npm start
The backend will run at: http://localhost:5000
```
💻 Frontend
Open terminal and go to your frontend folder:
```
cd frontend
```
Install frontend packages:
```
npm install
```
Run the frontend using Vite:
```
npm run dev
The frontend will be available at: http://localhost:5173
```
✅ What's Working
🔁 Routing – Navigation between "Product Submission" and "My Products" using react-router-dom.

📝 Product Form – Users can submit product name, price, description, and optional image URL.

💾 Form Submission – Sends data to backend API and saves it to MongoDB.

✅ Success Modal – On successful submission, a Tailwind modal appears.

🔀 Redirect – Clicking "OK" in the modal redirects users to the "My Products" page.

🎨 Tailwind UI – Fully responsive and styled only with Tailwind CSS.

📂 Tech Stack
Frontend: React, Tailwind CSS, Axios, React Router

Backend: Node.js, Express, MongoDB, Mongoose

Other Tools: Vite (for fast frontend dev)

