import Navbar from "../components/Navbar/Navbar";
import allowOnlyAuthenticatedUsers from "../hoc/AuthenticationWrapper"
import { useUserContext } from "../context/UserContext"; 
import TranslateContainer from "../components/Translate/TranslateContainer"
import { localStorageSave } from "../utils/localStorageManager";
import {LOCAL_STORAGE_CURRENT_USER} from "../const/localStorageKeys"
import { useState, useEffect} from "react"
import {updateTranslations} from "../api/translationsAPI"
import "./view.css"

const TranslationPage = () => {
    const { currentUser, setCurrentUser } = useUserContext()   
    const [requestedTranslation, setRequestedTranslation] = useState([])    // holding current translation
       


    useEffect(() => {                                                       // update local storage whenever state of user change -> prevents wrong data on profile page to be displayed if user would refresh the page
        localStorageSave(LOCAL_STORAGE_CURRENT_USER, currentUser)
    }, [currentUser])


    //this function will split the word into pieces and send it sends a http request
    const handleTranslateClicked =async({ translationRequest }) => {
        //this will remove white space and symbols in translation
        let newTranslation = translationRequest.replace( /\s/g, '').replace(/[^a-zA-Z ]/g, "").split("")
        let lastTranslation = currentUser.translations[currentUser.translations.length-1]    // keep track of the last requested translation, to avoid multiple duplicates in a row in the API and profile history

        // set a new translation -  left outside of the conditional statement below to improve user experience 
        setRequestedTranslation(newTranslation)            
        // check if the input is not empty or the input is the same as the lastly called
        if (newTranslation.length !== 0 && translationRequest !== lastTranslation) {    // we want to call API and update our user translations state only if it is not an empty call and its a new translation -> 
                                                                                        // prevents adding multiple times the same translation  by clicking multiple times on the button with the same sentence in the input field                   
            setCurrentUser((prev) => ({...prev, translations: [ ...prev.translations, translationRequest]}));       // update state of our user -> because of useEffect local storage will also be updated
            const [error,result] = await updateTranslations(currentUser, translationRequest)                        // update API       
            if (error) {                // log errors only if they exist, do not log them as nulls
                console.log(error)
            }
            // console.log(result)
        } 
    }


    //this method creates a list with a cord template
    let hands = requestedTranslation.map((letter, index) => 
        <div className='col-md-3' key={index}>
            <div className="card">
                <img src={process.env.PUBLIC_URL +`/resources/signs/${letter.toLowerCase()}.png`} className="card-img-top" alt={letter}/>
            </div>
        </div>
    )


    return (
        <div>
            <Navbar page="TranslationPage" user={currentUser}/>
            <div className="css-container upper-yellow">
                <div className='container'>
                    <h1>Translate</h1>
                    <br></br>
                    <div className='row'>
                        <div className='col-md-12'>
                            <TranslateContainer onTranslateRequest={handleTranslateClicked} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                {requestedTranslation.length !== 0 && <div className='output-field row'>{hands}</div>}
            </div>
            <br></br>
        </div>
    )
}

export default allowOnlyAuthenticatedUsers(TranslationPage)
