import PropTypes from 'prop-types';
import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
    console.log(props)
    // props.callMe();
    return(
        <>
            <UserUsername username={props.username} />
            <b>Age: </b><span>{props.age}</span>
            <>
                <span>Email:</span>
                <span>user@example.com</span>
                <UserFavoriteFoods />
            </>
            {String(props.isLoggedIn)}
        </>
    );
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool,
    favoriteFoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    )

}
