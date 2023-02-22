import { useForm } from "react-hook-form"
// import "./TranslateContainer.css";

const TranslateContainer = ({onTranslateRequest}) => {

    const { register, handleSubmit} = useForm()

    const onSubmit = ( translationRequest ) => { onTranslateRequest(translationRequest) }


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
