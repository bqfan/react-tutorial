import { useState, useEffect } from "react"

function App() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("Rendering ...");
        document.title = "React Tutorial";
    });

    return <div>
        <div>You clicked the button {counter} times</div>
        <button onClick={() => setCounter((count) => count +1)}>
            Click Me
        </button>
    </div>
}

export default App;