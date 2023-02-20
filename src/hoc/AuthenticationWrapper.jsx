import { useUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom"

const allowOnlyAuthenticatedUsers = Component => props => {
    const { currentUser } = useUserContext();
    return currentUser !== null ? <Component {...props} />: <Navigate to="/" />
}


export default allowOnlyAuthenticatedUsers; 