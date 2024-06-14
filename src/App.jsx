import { useState, useEffect } from "react"

function App() {
    const [counter, setCounter] = useState(0);
    const [sync, setSync] = useState(false);

    useEffect(() => {
        console.log("Rendering ...");
        document.title = "React Tutorial " + counter;
    }, [sync]);

    return <div>
        <div>You clicked the button {counter} times</div>
        <button onClick={() => setCounter((count) => count +1)}>
            Click Me
        </button>
        <button onClick={() => setSync((current) => !current)}>Sync</button>
    </div>
}

export default App;