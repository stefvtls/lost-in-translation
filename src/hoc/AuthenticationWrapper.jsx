import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

const AuthenticationWrapper = Component => props => {
    const { user } = useUser()
    if (user !== null){
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}

export default AuthenticationWrapper
