import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./globals.css";
import { UsersPage } from './pages/UsersPage';
import { BlogPostsPage } from './pages/BlogPostsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App usersData={[
       {
            id: 1,
            username: "user1",
            email: "user1@example.com"
        },
        {
            id: 2,
            username: "user2",
            email: "user2@example.com"
        }]    
    }/>,
    children: [
      {
        path: '/users',
        element: <UsersPage />
      },
      {
        path: '/blogposts',
        element: <BlogPostsPage />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
