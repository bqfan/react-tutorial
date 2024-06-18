import { useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";

function App() {
    const [userData, setUserData] = useState({
        id: 1,
        username: "user1",
        email: "user1@example.com",
        displayName: "User1",
        setUserData: () => {},
    });

    return (
    <>
        <UserContext.Provider value={{ ...userData, setUserData }}>
            <div>
                <PostContainer />
            </div>
        </UserContext.Provider>
    </>
    )
}

export default App;