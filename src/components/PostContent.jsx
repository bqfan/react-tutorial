import { useContext } from "react";
import { PostContentButtons } from "./PostContentButtons";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContent() {
    const userContextData = useContext(UserContext);

    return (
        <div>
            <div>
                <span>PostContent</span>
            </div>
            <PostContentButtons />
            {userContextData.id}
            {userContextData.name}
            {userContextData.email}
            {userContextData.username}
        </div>
    )
}