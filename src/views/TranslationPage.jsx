import Navbar from "../components/Navbar/Navbar";
import allowOnlyAuthenticatedUsers from "../hoc/AuthenticationWrapper"
import { useUserContext } from "../context/UserContext"; 
import TranslateContainer from "../components/Translate/TranslateContainer"

import { useState} from "react"
import {updateTranslations} from "../api/translationsAPI"
import "./view.css"

const TranslationPage = () => {
    const { currentUser } = useUserContext()   

    const [requestedTransltation, setrequestedTransltation] = useState([])

    //this function will split the word into pieces and send it sends a http request
    const handleTranslateClicked =async({ translationRequest }) => {
        setrequestedTransltation(translationRequest.split(""))

        const [error,result] = await updateTranslations(currentUser, translationRequest)

        console.log('Error', error)
        console.log('Result', result)
    }

    //this method creates a list with a cord template
    let hands = requestedTransltation.map(letter =>
        <div className={'col-md-3'}>
            <div className="card">
                <img key={letter} src={process.env.PUBLIC_URL +`/resources/signs/${letter.toLowerCase()}.png`} className="card-img-top" alt="..."/>
            </div>
        </div>
    )


    return (
        <div>
            <Navbar page="TranslationPage" user={currentUser}/>
            <div className="css-container">
                <div className='container'>
                <h1>Translate</h1>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <TranslateContainer onTranslateRequest={handleTranslateClicked} />
                    </div>
                </div>
                    <br/>
                <div className={'row'}>
                    {hands}
                </div>
                </div>
            </div>
        </div>
    )
}

export default allowOnlyAuthenticatedUsers(TranslationPage)
