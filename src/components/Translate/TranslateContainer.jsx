import './TranslateContainer.css'
function TranslateContainer() {
    return (
        <div className='container result-container'>
            <div className='row'>
                <div className="col-md-10">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" disabled></textarea>
                </div>
            </div>
            <button className={'btn btn-primary btn-translation'}>Translation</button>
        </div>
    );
}

export default TranslateContainer
