import { useEffect, useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";
import { useFetchUser } from "./utils/hooks/useFetchUser";
import { Outlet, Link, useNavigate, Navigate } from 'react-router-dom';

function App() {
    const { user, loading, error } = useFetchUser(1);
    console.log(user, loading, error);

    const [userData, setUserData] = useState({

    });

    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !error && user) {
            setUserData(user);
            // navigate('/users');
        }
    // }, [loading, error, user, navigate]);
        }, [loading, error, user]);
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/blogposts">Blogs</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <label htmlFor="data">Enter data</label>
                <input type="text" id="data" onChange={(e) => {
                    console.log(e.target.value);
                    if (e.target.value.length > 10) {
                        navigate("/blogposts")
                    }
                }} />
            </div>
            <UserContext.Provider value={{ ...userData, setUserData }}>
                <div>
                    { loading ? "Loaing ..." : <PostContainer /> }
                </div>
            </UserContext.Provider>
            <Outlet />
        </>
    )
}

export default App;