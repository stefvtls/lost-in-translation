import { useUserContext } from "../../context/UserContext"
import { clearTranslations } from "../../api/translationsAPI"
import { useNavigate } from "react-router-dom";

const ProfileContainer = (props) => {
    const { currentUser, setCurrentUser } = useUserContext();
    const navigate = useNavigate();

    //STEFVTLS props.user.translations.slice(0).reverse()..
    //... creating a copy of array from api and reversing it to have last items first, 
    // we dont want to reverse the original array! 
    // then .slice(0,10).map() to get only last 10 items and not all of them
    const listOfTranslations = props.user.translations.slice(0).reverse().slice(0,10).map( (t,index)=>
        <div className="alert alert-warning" role="alert" key={index}>
            {t}
        </div>
    )

    const handleClickClearingAllTranslations = async () => {
        const [error, result] = await clearTranslations(currentUser);
        setCurrentUser(result)

        console.log(error)
        console.log(result)


    }

    const handleClickNavigateToTranslations = () => {
        navigate("/translations")
    }

    return (
    <div className="css-container">
        <div className={'container'}>
            <h1>Welcome back, {props.user.username}</h1>
            <br></br>
            <br></br>
            <br></br>
            { listOfTranslations.length !== 0 && <h5> Here is the list of your 10 last translations in order from the most recent to the latest </h5>}
            <br></br>
            <br></br>
            <br></br>
            { listOfTranslations.length === 0 && <h5> nothing to show here, we will display history of your last 10 translations as soon as you will use our translations app </h5>}
            <br></br>
            <ul> {listOfTranslations} </ul>
            <br></br>
            { listOfTranslations.length !== 0 && <button onClick={handleClickClearingAllTranslations}> Clear all translations </button>}
            <button onClick={handleClickNavigateToTranslations}> Translate something new! </button>
        </div>
    </div>
    )
}

export default ProfileContainer
