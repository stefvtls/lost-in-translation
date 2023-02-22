import { useForm } from "react-hook-form"
// import "./TranslateContainer.css";

const TranslateContainer = ({onTranslateRequest}) => {

    const { register, handleSubmit} = useForm()

    const onSubmit = ( translationRequest ) => { onTranslateRequest(translationRequest) }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'row'}>
                    <div className={'col-md-10'}>
                        <input type="text" className="form-control" id="exampleInputEmail1" {... register("translationRequest")} aria-describedby="emailHelp"/>
                    </div>
                    <div className={'col-md-2'}>
                        <button className={'btn btn-primary'}> > </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default TranslateContainer
