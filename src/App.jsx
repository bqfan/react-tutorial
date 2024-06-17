import { PostContainer } from "./components/PostContainer";
import { PostContentButtons } from "./components/PostContentButtons";
import { UserContext } from "./utils/contexts/UserContext";

function App() {
    return (
    <>
        <UserContext.Provider
            value={{
                id: 1,
                username: "user1",
                email: "user1@example.com",
                displayName: "User1"
            }}>
            <div>
                <PostContainer />
            </div>
        </UserContext.Provider>
        <PostContentButtons />
    </>
    )
}

export default App;