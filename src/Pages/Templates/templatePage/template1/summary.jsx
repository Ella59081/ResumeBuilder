import './template1.css'
import { Link } from 'react-router-dom'

function Summary(){
    return (
        <>
            <form className="first-part">
                        <div className="header">
                          <h1>Enter your professional summary</h1>
                          <p>Make it as detailed as possible</p>
                        </div>
                        <div className="form">
                            <textarea name="" id=""></textarea>
                            <div className='buttons-continue'>
                                <Link to='/review' className='continue' type='submit'>Continue</Link> 
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Summary