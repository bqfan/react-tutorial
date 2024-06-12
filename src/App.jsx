import { UserDetails } from "./components/UserDetails";

function App() {
    // NOT_VERIFIED | VERIFIED | ACCOUNT_DISABLED'
    const USER_STATUS = "VERIFIED";

    switch (USER_STATUS) {
        case "NOT_VERIFIED":
            return (
                <div>
                    <span>
                        You are not verified. Please verify your Email or Mobile Number.
                    </span>
                </div>
            );
        case "VERIFIED":
            return (
                <div>
                    <span>
                        You are verified. Congrets! Click here to access to your dashboard.
                    </span>
                </div>
            );   
        case "ACCOUNT_DISABLED":
            return (
                <div>
                    <span>
                        Your account is disabled.
                    </span>
                </div>
            );
        default:
            return (
                <div>
                    <span>
                        Please contact system admin.
                    </span>
                </div>
            );                    
    }

    // if (USER_STATUS === "NOT_VERIFIED") {
    //     return (
    //         <div>
    //             <span>
    //                 You are not verified. Please verify your Email or Mobile Number.
    //             </span>
    //         </div>
    //     );
    // } else if (USER_STATUS === "VERIFIED") {
    //     return (
    //         <div>
    //             <span>
    //                 You are verified. Congrets! Click here to access to your dashboard.
    //             </span>
    //         </div>
    //     );        
    // } else if (USER_STATUS === "ACCOUNT_DISABLED") {
    //     return (
    //         <div>
    //             <span>
    //                 Your account is disabled.
    //             </span>
    //         </div>
    //     );            
    // } else {
    //     return (
    //         <div>
    //             <span>
    //                 Please contact system admin.
    //             </span>
    //         </div>
    //     );          
    // }

    // const isAuthenticated = true;

    // return isAuthenticated ? (
    //     <div>
    //         <h1>Welcome, User!</h1>
    //     </div>
    // ) : (
    //     <div>
    //         <span>Youare not logged in!</span>
    //     </div>        
    // );

    // if (isAuthenticated) {
    //     return (
    //         <div>
    //             <h1>Welcome, User!</h1>
    //         </div>
    //     );
    // }

    // return (
    //     <div>
    //         <span>Youare not logged in!</span>
    //     </div>
    // );
}

export default App;