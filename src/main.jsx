import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./globals.css";
// import { UsersPage } from './pages/UsersPage';
// import { BlogPostsPage } from './pages/BlogPostsPage';
import { routes } from "./utils/constants";

export const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
