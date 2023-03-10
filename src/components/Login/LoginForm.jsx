import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { getUserOrCreateNewUser } from "../../api/usersAPI"
import { localStorageSave } from '../../utils/localStorageManager'
import { useUserContext } from '../../context/UserContext'
import { LOCAL_STORAGE_CURRENT_USER } from "../../const/localStorageKeys"
import { useNavigate } from 'react-router-dom' 



// constraints for validation of registered inputs
const nameConstraints = {
    required: true,
    minLength: 4,
}
 

// functional component for our Login form
export const LoginForm = () => {
    // HOOKS
    const { register, handleSubmit, formState: {errors} } = useForm();      // hook from react-hook-form to manage state of our form
    const { currentUser,  setCurrentUser} = useUserContext()                // our currentUserContext
    const navigate = useNavigate();                                         // navigation from React router
    
     // LOCAL STATE
    const [ loading, setLoading ] = useState(false);                        // state hook to keep track of our async call to the api
    const [ apiError, setApiError ] =  useState(null);                      // state hook to keep track if no errors are back from api calls

    // SIDE EFFECTS
    useEffect(() => {
        if (currentUser) {
            navigate("/translations")                                       // if user is authenticated redirect him to translations
        }
    }, [currentUser, navigate])


    // EVENT HANDLERS
    // function defined to handle our custom event when submitting data
    const onSubmit = async (loginForm) => {        
        setLoading(true);                                    
        const [errorFromAPI, userResponse] = await getUserOrCreateNewUser(loginForm.name)        // async call to api to find or create user with the given string
        if (errorFromAPI) {
            setApiError(errorFromAPI);                                                      
        } 
        if (userResponse) {
            localStorageSave(LOCAL_STORAGE_CURRENT_USER, userResponse)
            setCurrentUser(userResponse)
        }
        setLoading(false)
    }

    // RENDER FUNCTIONS
    // display errors if input from the input field did not meet our constraints
    const displayErrorsFromFormState = () => {
        if (errors.name) {
            if (errors.name.type === 'required' ) {
                return <span>Name is required. </span>
            } 
            if (errors.name.type === 'minLength') {
                return <span>Name is too short. Use at least 4 characters. </span>
            }
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="What's your name?" {...register("name", nameConstraints)} />
                </fieldset>
                <button type="submit" disabled={loading}> ???? </button>
            </form>
            <div className="error">
                { displayErrorsFromFormState() }
                {loading && <p> Logging in... </p>}
                {apiError && <p> { apiError } </p>}
            </div>
        </div>
    )
}