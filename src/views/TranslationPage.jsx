import { useState} from "react"
// import Navbar from "../components/Navbar/Navbar";
import allowOnlyAuthenticatedUsers from "../hoc/AuthenticationWrapper"
import { useUserContext } from "../context/UserContext";
import {updateTranslations} from "../api/translationsAPI"
import TranslateContainer from "../components/Translate/TranslateContainer";
import "./view.css"


const TranslationPage = () => {
    const { currentUser } = useUserContext()
    const [requestedTransltation, setrequestedTransltation] = useState([])

    const handleTranslateClicked =async({ translationRequest }) => {
        setrequestedTransltation(translationRequest.split(""))

        const [error,result] = await updateTranslations(currentUser, translationRequest)

        console.log('Error', error)
        console.log('Result', result)
    }

    let hands = requestedTransltation.map(letter => <li key={letter}><img src={process.env.PUBLIC_URL +`/resources/signs/${letter.toLowerCase()}.png`}  alt={"sign"}/></li>)

    return (
        // <Navbar page="TranslationPage" user={currentUser}>
        <div className='container'>
            <h1>Translate</h1>
            <div className={'row'}>
                <div className={'col-md-12'}>
                    <TranslateContainer onTranslateRequest={handleTranslateClicked} />
                </div>
            </div>
            <div className={'row'}>
                {hands}
            </div>
        </div>
    )
}

export default allowOnlyAuthenticatedUsers(TranslationPage)
