import Navbar from "../components/Navbar/Navbar";
import allowOnlyAuthenticatedUsers from "../hoc/AuthenticationWrapper"
import { useUserContext } from "../context/UserContext"; 

const TranslationPage = () => {
    const { currentUser } = useUserContext()   
    return (
        <Navbar page="TranslationPage" user={currentUser}/>
    )
}

export default allowOnlyAuthenticatedUsers(TranslationPage)