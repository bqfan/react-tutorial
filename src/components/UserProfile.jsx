import { UserFavoriteFoods } from "./UserFavoriteFoods";

export function UserProfile() {
    return(
        <div>
            <p>
                <div>
                    <span>Email:</span>
                    <span>user@example.com</span>
                </div>
                <UserFavoriteFoods />
            </p>
        </div>
    );
}

