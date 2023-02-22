import { useForm } from "react-hook-form"
import "./TranslateContainer.css"

const TranslateContainer = ({onTranslateRequest}) => {

    const { register, handleSubmit} = useForm()

    const onSubmit = ( translationRequest ) => { onTranslateRequest(translationRequest) }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="translation-request"> <img src="img/ui/keyboard.png" alt="" /></label>
                    <input type="text" {... register("translationRequest")} placeholder="Enter your translation request." />
                    <button className="button-style-arrow" type="submit"><img className="arrow " src="img/ui/right-arrow.png" alt="right arrow"/></button>
                </fieldset>

            </form>
        </div>
    )
}

export default TranslateContainer

