import { useState } from "react"
import { UserDetails } from "./components/UserDetails"

function App() {
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
        {users.map((user) => (
            <UserDetails key={user.id} user={user} setUsers={setUsers} />
        ))}
    </div>
}

export default App;