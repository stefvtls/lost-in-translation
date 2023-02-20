import { createContext, useState, useContext } from "react"
import { LOCAL_STORAGE_CURRENT_USER } from "../const/localStorageKeys";
import { localStorageRead } from "../utils/localStorageManager";


const currentlySavedUser = createContext(); 

export const useUserContext = () => useContext(currentlySavedUser); 

const UserContext= (props) => {
    const [currentUser,  setCurrentUser] = useState(localStorageRead(LOCAL_STORAGE_CURRENT_USER))
    return (
        <currentlySavedUser.Provider value={{currentUser,  setCurrentUser}}>
            {props.children}
        </currentlySavedUser.Provider>
    )
}

export default UserContext