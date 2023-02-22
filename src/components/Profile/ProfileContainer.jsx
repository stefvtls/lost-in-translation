

const ProfileContainer = (props) => {
    //STEFVTLS props.user.translations.slice(0,10).reverse().map().... creating a copy of array from api and reversing it to display only latest 10 items
    const listOfTranslations = props.user.translations.slice(0).reverse().slice(0,10).map( (t,index)=>
        <div className="alert alert-warning" role="alert" key={index}>
            {t}
        </div>
    )

    return (
    <div className="css-container">
        <div className={'container'}>
            <h1>Welcome back, {props.user.username}</h1>
            <h5> Here is the list of your 10 last translations in order from the most recent to the latest </h5>
            <br></br>
            <ul> {listOfTranslations} </ul>
        </div>
    </div>
    )
}

export default ProfileContainer
