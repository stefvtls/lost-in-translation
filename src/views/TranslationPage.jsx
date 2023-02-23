import Navbar from "../components/Navbar/Navbar";
import allowOnlyAuthenticatedUsers from "../hoc/AuthenticationWrapper"
import { useUserContext } from "../context/UserContext"; 
import TranslateContainer from "../components/Translate/TranslateContainer"

import { useState} from "react"
import {updateTranslations} from "../api/translationsAPI"
import "./view.css"

const TranslationPage = () => {
    const { currentUser, setCurrentUser } = useUserContext()   

    const [requestedTranslation, setRequestedTranslation] = useState([])

    const [lastTranslation,setlastTranslation] = useState([''])


    //this function will split the word into pieces and send it sends a http request
    const handleTranslateClicked =async({ translationRequest }) => {
        //this will remove white space in translation
        let newTrans=translationRequest.replace( /\s/g, '')
        //this will remove symbols in translation
        let removeSymbol=newTrans.replace(/[^a-zA-Z ]/g, "")
        let newTranslation = removeSymbol.split("")
        setRequestedTranslation(newTranslation)
        // STEFVTLS: if no input do not bother for translations, just ignore it,
        // we will not update the API and current state, so empty translation will not show up on the profile page
        if (newTranslation.length !== 0 && removeSymbol!==lastTranslation) {
            const [error,result] = await updateTranslations(currentUser, translationRequest)

            // STEFVTLS: you need to change the state of the user except of changing the API, otherwise API updates, but the components in the app does not know about it
            setCurrentUser(result)
            setlastTranslation(removeSymbol)
            console.log('Error', error)
            console.log('Result', result)
        } 
    }


    //this method creates a list with a cord template
    let hands = requestedTranslation.map(letter => 
        <div className='col-md-3'>
            <div className="card">
                <img key={letter} src={process.env.PUBLIC_URL +`/resources/signs/${letter.toLowerCase()}.png`} className="card-img-top" alt={letter}/>
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

        </div>
    )
}

export default allowOnlyAuthenticatedUsers(TranslationPage)
