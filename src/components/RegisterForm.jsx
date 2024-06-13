import { useState } from "react";

export function RegisterForm() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [displayName, setDisplayName] = useState("");

    // const isDisabled = !username || !password || !displayName;

    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
        displayName: "",
    });

    const isDisabled = !formFields.username || !formFields.password || !formFields.displayName;

    console.log(formFields);

    return <form>
        <div>
            <label htmlFor="username">Username: </label>
            <br />
            <input
                id="username"
                type="text"
                name="username"
                value={formFields.username}
                autoComplete="username"
                required 
                // onChange={(e) => setUsername(e.target.value)}
                onChange={(e) => {
                    setFormFields((currentState) =>
                        ({
                            ...currentState,
                            username: e.target.value
                        }));
                }}
            />
            <br />
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <br />
            <input
                id="password"
                type="text"
                name="password"
                value={formFields.password}
                autoComplete="new-password"
                required
                // onChange={(e) => setPassword(e.target.value)}
                onChange={(e) => {
                    setFormFields((currentState) =>
                        ({
                            ...currentState,
                            password: e.target.value
                        }));
                }}
            />
            <br />
        </div>
        <div>
            <label htmlFor="displayName">Display name: </label>
            <br />
            <input
                id="displayName"
                type="text"
                name="displayName"
                value={formFields.displayName}
                autoComplete="displayName"
                required
                // onChange={(e) => setDisplayName(e.target.value)}
                onChange={(e) => {
                    setFormFields((currentState) =>
                        ({
                            ...currentState,
                            displayName: e.target.value
                        }));
                }}
            />
            <br />
        </div>
        <div>
            <button disabled={isDisabled}>Sign up</button>
        </div>
        <div>
            <span>Username: {formFields.username}</span>
        </div>
        <div>
            <span>Password: {formFields.password}</span>
        </div>
        <div>
            <span>Display Name: {formFields.displayName}</span>
        </div>
    </form>
}