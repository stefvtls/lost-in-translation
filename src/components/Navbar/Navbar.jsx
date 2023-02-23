import { NavLink } from 'react-router-dom';
import { localStorageDelete } from '../../utils/localStorageManager';
import { LOCAL_STORAGE_CURRENT_USER } from '../../const/localStorageKeys'
import { useUserContext } from '../../context/UserContext';

// Define the Navbar component
const Navbar = (props) => {

    // Use the useUserContext hook to get the setCurrentUser function from the currentlySavedUser context
    const { setCurrentUser } = useUserContext()   

    // Define a logOut function to remove the current user object from local storage and set the current user to null
    const logOut = () => {

        // Display a confirmation message using the window.confirm function
        if (window.confirm("Are you sure you want to log out?")) {
            localStorageDelete(LOCAL_STORAGE_CURRENT_USER)
            setCurrentUser(null)
        }
    }

    // Return the JSX that defines the Navbar component
    return (
        <div className='navbar'>
            <div>
                <div className='navlogo'> 
                    <img src={process.env.PUBLIC_URL + '/resources/Logo.png'} alt="logo" />
                </div>
                <div className='navtext heading'>Lost in Translation</div>
            </div>

            <div className='profilebutton'> 

                {/* If the current page is the TranslationPage, display the user's username */}
                {props.page === "TranslationPage" && 
                <div className='username'> 
                    <NavLink className="link" to="/profile"> {props.user.username.toUpperCase()} </NavLink>
                    <img src={process.env.PUBLIC_URL + '/resources/userLogo.png'} alt="logo" />
                </div>
                }

                {/* If the current page is the ProfilePage, display a logout button */}
                {props.page === "ProfilePage" && 
                <div className='username'> 
                    <NavLink onClick={logOut} className="link"> LOG OUT </NavLink>
                </div>
                }

            </div>
        </div>
    )
}

export default Navbar;