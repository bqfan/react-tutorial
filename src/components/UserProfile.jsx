import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    console.log(props)
    // props.callMe();
    return(
        <div>
            <UserUsername username="Bob" />
            <b>Age: </b><span>{props.age}</span>
            <div>
                <span>Email:</span>
                <span>user@example.com</span>
            </div>
            <UserFavoriteFoods />
            {String(props.isLoggedIn)}
        </div>
    );
}

