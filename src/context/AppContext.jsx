import UserContext from "./UserContext"


// wrapping component for our User Context
const AppContext = (props) => {
    return (
        <UserContext>
            {props.children}
        </UserContext>
    )
}


export default AppContext