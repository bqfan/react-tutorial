export function LoginForm() {
    return <form>
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
