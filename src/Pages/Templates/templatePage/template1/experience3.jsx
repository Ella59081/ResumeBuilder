import './template1.css'
import { Link } from 'react-router-dom'

function Experience3(){

    const [isAddded, setIsAdded] = useState(false);
    const addExperience =() =>{
        setIsAdded(true)
    }
    return (
        <>
            <form className="first-part longer">
                        <div className="header">
                          <h1>Add another Experience</h1>
                          <p>Add description and roles of your previous jobs</p>
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
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Experience3