import Navbar from "../components/Navbar/Navbar";
import { useUserContext } from "../context/UserContext"; 
import allowOnlyAuthenticatedUsers from "../hoc/AuthenticationWrapper"
import ProfileContainer from "../components/Profile/ProfileContainer";

const ProfilePage = (props) => {
    const { currentUser } = useUserContext()   

    return (
        <>
            <Navbar page="ProfilePage"/>       
            <ProfileContainer user={currentUser} />
        </>
    )
}

export default allowOnlyAuthenticatedUsers(ProfilePage);