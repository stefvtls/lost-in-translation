import {Link} from 'react-router-dom';

const Navbar = (props) => {

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
                    <Link className="link" to="/profile"> {"USERNAME"} </Link>
                    <img src={process.env.PUBLIC_URL + '/resources/userLogo.png'} alt="logo" />
                </div>
                }

                {props.page === "ProfilePage" && 
                <div className='username'> 
                    <Link className="link" to="/"> LOG OUT </Link>
                    {/* {add logic for logging out} */}
                    {/* <img src={process.env.PUBLIC_URL + '/resources/userLogo.png'} alt="logo" /> */}
                </div>
                }

            </div>
        </div>
    )
}

export default Navbar;