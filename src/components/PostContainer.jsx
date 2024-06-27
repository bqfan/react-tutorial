import { useContext, useState } from "react"
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContainer() {
    const [data, setData] = useState("Hello World!");
    const userContextData = useContext(UserContext);

    console.log(userContextData);
    return (
        <div>
            <div>
                <h3>PostContainer</h3>
            </div>
            <div>Display Name: {userContextData.name}</div>
            <div>ID: {userContextData.id}</div>
            <div>Email: {userContextData.email}</div>
            <div>Username: {userContextData.username}</div>
            <PostContent />
        </div>
    )
}
