import PropTypes from 'prop-types'
import { useState} from "react"

export function UserDetails(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(props.user.username)
    const [email, setEmail] = useState(props.user.email)
    // console.log(isEditing);
    return (
        <div>
            <div>
                <button onClick={() => {
                    setIsEditing((currentState) => !currentState);
                }}>Edit</button>
                <button>Delete</button>
                <button onClick={() => console.log(props.user)}>Save</button>
            </div>
            <div key={props.user.id}>
                <b>ID: </b>
                <span>{props.user.id}</span>
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
                    <span>{props.user.username}</span>}
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
                    <span>{props.user.email}</span>}
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