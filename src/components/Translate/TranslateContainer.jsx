import { useForm } from "react-hook-form"


const TranslateContainer = ({onTranslateRequest}) => {

    // Initialize the form hooks
    const { register, handleSubmit} = useForm()

    //this method will be executed when the form is submit
    const onSubmit = ( translationRequest ) => { onTranslateRequest(translationRequest) }

    // Render the input field and form
    return (
        <div className="input-field">
            <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                <input type="text" className="form-control" id="exampleInputEmail1" {... register("translationRequest")} aria-describedby="emailHelp"/>
                <button className='btn btn-primary'> 🡲 </button>
            </form>
        </div>
    )
}

export default TranslateContainer
