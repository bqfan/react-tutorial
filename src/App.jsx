import { LoginForm } from "./components/LoginForm"

function App() {
    window.addEventListener("resize", (e) => {
        console.log(window.innerHeight, window.innerWidth);
    });

    return <div>
        <LoginForm />
    </div>
}

export default App;