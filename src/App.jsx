import { useState } from "react"
import { UserDetails } from "./components/UserDetails"

function App() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [counter, setCounter] = useState(4);

    const [users, setUsers] = useState([
        {
            id: 1,
            username: "user1",
            email: "user1@example.com",
        },
        {
            id: 2,
            username: "user2",
            email: "user2@example.com",
        },
        {
            id: 3,
            username: "user3",
            email: "user3@example.com",
        },
    ]);

    return <div>
        <form onSubmit={(e) => {
            e.preventDefault();
            // console.log(username, email);
            const newUser = {
                id: counter,
                username,
                email,
            };
            setCounter((currentCounter) => currentCounter + 1);
            setUsers((currentUsersState) => [...currentUsersState, newUser])
        }}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => {
                    setUsername(e.target.value);
                }} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                }} />
            </div>
            <div>
                <button>Add user</button>
            </div>
            <br />
        </form>

        {users.map((user) => (
            <UserDetails key={user.id} user={user} setUsers={setUsers} />
        ))}
    </div>
}

export default App;