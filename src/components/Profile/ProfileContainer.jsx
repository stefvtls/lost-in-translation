

const ProfileContainer = (props) => {
    const listOfTranslations = props.user.translations.map( (t,index)=>
        <div className="alert alert-warning" role="alert" key={index}>
            {t}
        </div>
    )

    return (
    <div className="css-container">
        <div className={'container'}>
            <h1>Welcome, {props.user.username}</h1>
            <ul> {listOfTranslations} </ul>
        </div>
    </div>
    )
}

export default ProfileContainer
