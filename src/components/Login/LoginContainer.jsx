import { LoginForm } from "./LoginForm"

// functional component to take care of displaying our landing page
export const LoginContainer = () => {
    return (
        <div className="css-container">
            <div className="upper">
                <div className="welcome">
                    <div className="welcome-img">
                        <img src={process.env.PUBLIC_URL + '/resources/Logo-Hello.png'} alt="happy translator"></img>
                    </div>
                    <div className="welcome-text">
                        <h1 className="heading">Lost in Translation</h1>
                        <h2>Get started</h2>
                    </div>
                </div>
                <div className="form-field">
                    <LoginForm />
                </div>
            </div>
            <div className="lower"></div>
        </div>
    )
}