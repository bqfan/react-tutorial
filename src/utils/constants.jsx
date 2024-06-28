import App from "../App";
import { BlogPostsPage } from "../pages/BlogPostsPage";
import { UsersPage } from "../pages/UsersPage";

export const routes = [
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
]