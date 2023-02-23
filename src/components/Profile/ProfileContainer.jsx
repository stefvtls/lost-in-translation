import { useUserContext } from "../../context/UserContext"
import { clearTranslations } from "../../api/translationsAPI"
import { useNavigate } from "react-router-dom";

const ProfileContainer = (props) => {

    // Extracting the currentUser and setCurrentUser from UserContext
    const { currentUser, setCurrentUser } = useUserContext();
    const navigate = useNavigate();

    // Creating a copy of the user's translation's list of last 10 translations with a template
    const listOfTranslations = props.user.translations.slice(0).reverse().slice(0,10).map( (t,index)=>
        <div className="alert alert-warning" role="alert" key={index}>
            {t}
        </div>
    )

    // event handler to clear all the translations of the user
    const handleClickClearingAllTranslations = async () => {
        if (window.confirm("Are you sure you want to clear history of all your translations?")) {
            const [error, result] = await clearTranslations(currentUser);
            setCurrentUser(result)
            console.log(error)
            console.log(result)
        }
    }

    // event handler to navigate to the translations page
    const handleClickNavigateToTranslations = () => {
        navigate("/translations")
    }

    return (
    <div className="css-container">
        <div className='container'>
            <h1>Welcome back, {props.user.username}</h1>
            <br></br>
            { listOfTranslations.length !== 0 && <h5> Here is the list of your 10 last translations in order from the most recent to the latest </h5>}
            <br></br>
            { listOfTranslations.length === 0 && <h5> Nothing to show here, we will display the history of your last 10 translations as soon as you will use our translations app </h5>}
            <br></br>
            <ul> {listOfTranslations} </ul>
            <br></br>
        </div>
        <div className='container extra'>
            { listOfTranslations.length !== 0 && <button onClick={handleClickClearingAllTranslations} className="btn-extra"> Clear all translations </button>}
            <button onClick={handleClickNavigateToTranslations} className="btn-extra"> Translate something new ! </button>
        </div>
    </div>
    )
}

export default ProfileContainer
