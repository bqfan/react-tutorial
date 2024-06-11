import { UserDetails } from "./components/UserDetails";

function App() {
    const mockUsers = [
        {
            id: 1,
            username: "user1",
            email: "user1@example.com"
        },
        {
            id: 2,
            username: "user2",
            email: "user2@example.com"
        },
        {
            id: 3,
            username: "user3",
            email: "user3@example.com"
        },
        {
            id: 4,
            username: "user4",
            email: "user4@example.com"
        },
    ];

    return(
        <div>
            {mockUsers.map((user) => {
                return <UserDetails user={user} />;
            })}
        </div>
    );
}

export default App;