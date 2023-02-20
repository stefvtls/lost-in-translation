import UserContext from "./UserContext"

const AppContext = (props) => {

    return (
        <UserContext>
            {props.children}
        </UserContext>
    )

 
}
export default AppContext