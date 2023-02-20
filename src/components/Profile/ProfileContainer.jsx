


const ProfileContainer = (props) => {
    const listOfTranslations = props.user.translations.map( (t,index)=> <li key={index + t}> {t} </li>)

    return (
    <div className="css-container">
        <h1>welcome, {props.user.username}</h1>
        <ul> {listOfTranslations} </ul>
    </div>
    )
}

export default ProfileContainer