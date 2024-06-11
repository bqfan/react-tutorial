import { UserProfile } from "./components/UserProfile";

function App() {
    const callMe = () => {
        console.log("hello")
    };
    return(
        <div>
            <h1>Root Component</h1>
            <UserProfile 
                username="Bob"
                age={20}
                isLoggedIn={false}
                favoriteFoods={[
                {
                    name: 'Sushi',
                    id: 'Sushi'
                },
                {
                    name: 'Pizza',
                    id: 'Pizza'
                },                
            ]} callMe={callMe}/>
        </div>
    );
}

export default App;