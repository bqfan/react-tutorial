import { useState, useEffect } from "react"

function App() {
    const [blogPostData, setBlogPostData] = useState({
        title: "",
        body: "",
    });

    console.log(blogPostData);

    return <div>
        <form onSubmit={(e) => {
            e.preventDefault();

            if (blogPostData.title && blogPostData.body) {
                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    body: JSON.stringify({
                        userId: 1,
                        title: blogPostData.title,
                        body: blogPostData.body
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }).then((response) => response.json())
                .then((json) => console.log(json)).catch((err) => console.log(err));
            }
        }}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={blogPostData.title}
                    onChange={(e) => {
                    setBlogPostData((currentBlogPostData) => ({
                        ...currentBlogPostData,
                        title: e.target.value
                    }));
                }} />
            </div>
            <div>
                <label htmlFor="body">Content</label>
                <input
                    type="text"
                    id="body"
                    value={blogPostData.body}
                    onChange={(e) => {
                    setBlogPostData((currentBlogPostData) => ({
                        ...currentBlogPostData,
                        body: e.target.value
                    }));
                }}/>
            </div>
            <button>Create Post</button>
        </form>
    </div>
}

export default App;