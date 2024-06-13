import { RegisterForm } from "./components/RegisterForm"

function App() {
    window.addEventListener("resize", (e) => {
        console.log(window.innerHeight, window.innerWidth);
    });

    return <div>
        <RegisterForm />
    </div>
}

export default App;