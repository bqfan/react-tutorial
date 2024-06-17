import { useEffect } from "react"
import { useDocumentClick } from "../utils/hooks/useDocumnetClick";

export function LoginForm() {
    const resizeEventHandler = (e) => {
        console.log("Window/ViewPort Resized!");
    }

    useEffect(() => {
        window.addEventListener('resize', resizeEventHandler);

        return () => {
            console.log("Unmounting LoginForm");
            console.log("Removing resize eventListener")
            window.removeEventListener('resize', resizeEventHandler);
        };
    }, []);

    useDocumentClick();

    return <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");

        // fetch("http://localhost:3001/api/login", {
        //     body: {
        //         username,
        //         password,
        //     },
        // });
    }}>
        <label htmlFor="username">Username</label>
        <br />
        <input
            id="username"
            type="text"
            name="username"
            autoComplete="username"
            required
            onChange={(e) => {
                console.log(`Username: ${e.target.value}`);
            }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
            onChange={(e) => {
                console.log(`Password: ${e.target.value}`);
            }}
        />
        <br />
        <button type="submit">Login</button>
    </form>
}
