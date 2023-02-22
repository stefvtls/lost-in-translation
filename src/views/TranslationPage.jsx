import TranslateContainer from "../components/Translate/TranslateContainer"
import './TranslationPage.css'

const TranslationPage = () => {

    const handleInput=(event)=>{
        console.log(event.target.value)
    }

    return (
        <div className={'yellow-box'}>
            <div className={'container'}>
                <br/>
                <div className={'row'}>
                    <div className="col-md-9">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Hello" onChange={handleInput}/>
                    </div>
                    <div className="col-md-2">
                        <button className={'btn btn-primary'}>Go</button>
                    </div>
                </div>
            </div>
            <TranslateContainer/>
        </div>
    )
}

export default TranslationPage
