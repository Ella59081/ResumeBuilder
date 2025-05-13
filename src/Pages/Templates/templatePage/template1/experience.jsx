import './template1.css'
import { Link } from 'react-router-dom'

function Experience(){

    const [isAddded, setIsAdded] = useState(false);
    const addExperience =() =>{
        setIsAdded(true)
    }
    return (
        <>
            <form className="first-part longer">
                        <div className="header">
                          <h1>Enter your Experience</h1>
                          <p>Start with your most resent job then work backwards</p>
                        </div>
                        <div className="form">
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="firstName">
                                        JOB TITLE
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        EMPLOYER
                                    </label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="city">
                                        CITY
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="name">
                                    <label htmlFor="country">
                                        COUNTRY
                                    </label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="start">
                                        START DATE
                                    </label>
                                    <input type="date" name="" id="" />
                                </div>
                                
                            </div>
                            <div class="roles">
                                <h2>Roles</h2>
                                <div className="flex">
                                    <div className="name">
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>
                            </div>

                                                       
                            <div className='buttons-continue'>
                                <Link to='/resumeData/education' className='continue' type='submit'>Continue</Link>
                                <button onClick={addExperience} className="addex"><span>+ </span>Add experience</button>  
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Experience