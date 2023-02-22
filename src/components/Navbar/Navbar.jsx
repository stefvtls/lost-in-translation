import { NavLink } from 'react-router-dom';
import { localStorageDelete } from '../../utils/localStorageManager';
import { LOCAL_STORAGE_CURRENT_USER } from '../../const/localStorageKeys'
import { useUserContext } from '../../context/UserContext';

const Navbar = (props) => {
    const { currentUser, setCurrentUser } = useUserContext()   

    const logOut = () => {
        localStorageDelete(LOCAL_STORAGE_CURRENT_USER)
        setCurrentUser(null)
    }

    return (
        <div className='navbar'>
            <div>
                <div className='navlogo'> 
                    {/* <img src={process.env.PUBLIC_URL + '/resources/splash.svg'} alt="logo" /> */}
                    <img src={process.env.PUBLIC_URL + '/resources/Logo.png'} alt="logo" />
                </div>
                <div className='navtext heading'>Lost in Translation</div>
            </div>

            <div className='profilebutton'> 

                {props.page === "TranslationPage" && 
                <div className='username'> 
                    <NavLink className="link" to="/profile"> {props.user.username.toUpperCase()} </NavLink>
                    <img src={process.env.PUBLIC_URL + '/resources/userLogo.png'} alt="logo" />
                </div>
                }

                {props.page === "ProfilePage" && 
                <div className='username'> 
                    <NavLink onClick={logOut} className="link"> LOG OUT </NavLink>
                    {/* <img src={process.env.PUBLIC_URL + '/resources/userLogo.png'} alt="logo" /> */}
                </div>
                }

            </div>
        </div>
    )
}

export default Navbar;