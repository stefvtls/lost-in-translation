import Navbar from "../components/Navbar/Navbar";
import { getUserOrCreateNewUser } from "../api/usersAPI";



// console.log(getUserOrCreateNewUser("yo"))

const LoginPage = () => {
    return (
        <>
            <Navbar page="LoginPage"/>
        </> 
    )
}

export default LoginPage;