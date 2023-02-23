import { createContext, useState, useContext } from "react"
import { LOCAL_STORAGE_CURRENT_USER } from "../const/localStorageKeys";
import { localStorageRead } from "../utils/localStorageManager";


// defining our User Context
const currentlySavedUser = createContext(); 

// custom hook for our currentlySavedUser Context
export const useUserContext = () => useContext(currentlySavedUser); 

// functional component called UserContext that is responsible for managing the data inside the currentlySavedUser Context
const UserContext = (props) => {
    const [currentUser,  setCurrentUser] = useState(localStorageRead(LOCAL_STORAGE_CURRENT_USER))
    return (
        <currentlySavedUser.Provider value={{currentUser,  setCurrentUser}}>
            {props.children}
        </currentlySavedUser.Provider>
    )
}

export default UserContext