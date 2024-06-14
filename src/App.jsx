import { useState, useEffect } from "react"

function App() {
    const [counter, setCounter] = useState(0);
    const [sync, setSync] = useState(false);

    useEffect(() => {
        console.log("Rendering ...");
        document.title = "React Tutorial " + counter;
    }, [sync]);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                    signal: controller.signal
                });
                const json = await response.json();
                console.log(json);
                console.log(controller.signal);
            } catch (err) {
                console.log(err);
            }
        }

        fetchUsers();
        return () => {
            controller.abort();
            console.log(controller.signal);
        }
        // fetch("https://jsonplaceholder.typicode.com/users",
        //     {method: "GET"}).then((response) => {
        //         // console.log(response);
        //         return response.json();
        //     }).then((data) => {
        //         console.log(data)
        //     }).catch((err) => {
        //         console.log(err);
        //     });
    });

    return <div>
        <div>You clicked the button {counter} times</div>
        <button onClick={() => setCounter((count) => count +1)}>
            Click Me
        </button>
        <button onClick={() => setSync((current) => !current)}>Sync</button>
    </div>
}

export default App;