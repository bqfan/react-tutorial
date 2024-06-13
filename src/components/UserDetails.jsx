import PropTypes from 'prop-types'
import { useState} from "react"

export function UserDetails({user, setUsers}) {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    // console.log(isEditing);
    return (
        <div>
            <div>
                <button onClick={() => {
                    setIsEditing((currentState) => !currentState);
                }}>Edit</button>
                <button onClick={() => {
                    setUsers((currentUserState) => currentUserState.filter(
                        (currentUser) => currentUser.id !== user.id
                    ));
                }}>Delete</button>
                { isEditing && (
                <button onClick={() => {
                    setUsers((currentUsersState) => {
                        return currentUsersState.map(
                            (currentUser) => {
                                // if (currentUser.id === user.id) {
                                //     return {...currentUser, username, email};
                                // } else return currentUser;
                                return currentUser.id === user.id ? {...currentUser, username, email} :
                                    currentUser;
                        });
                    });
                    setIsEditing(false);
                }}>Save</button>
            )}
            </div>
            <div key={user.id}>
                <b>ID: </b>
                <span>{user.id}</span>
                <br />
                <b>Username: </b>
                {isEditing ? <input
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    autoComplete="username"
                    required
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }} /> :
                    <span>{user.username}</span>}
                <br />
                <b>Email: </b>
                {isEditing ? <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="email"
                    required
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} /> :
                    <span>{user.email}</span>}
                <br />
            </div>
        </div>
    )
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    setUsers: PropTypes.func.isRequired,
}