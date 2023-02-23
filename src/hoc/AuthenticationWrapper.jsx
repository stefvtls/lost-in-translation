import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";


// Higher order component to secure our app's urls. 
// Allows access to only homepage for not authenticated users.
const allowOnlyAuthenticatedUsers = Component => props => {
    const { currentUser } = useUserContext();
    return currentUser !== null ? <Component {...props} /> : <Navigate to="/" />
}


export default allowOnlyAuthenticatedUsers; 