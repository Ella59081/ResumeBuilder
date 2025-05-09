import './template1.css'
import { Link } from 'react-router-dom'

function Education(){
    return (
        <>
            <form className="first-part">
                        <div className="header">
                          <h1>Enter your Education</h1>
                          <p>Talk about colleges, education programmes or training courses</p>
                        </div>
                        <div className="form">
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="firstName">
                                        SCHOOL NAME
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        SCHOOL LOCATION
                                    </label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="city">
                                        DEGREE
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="name">
                                    <label htmlFor="country">
                                        GRADUATION DATE
                                    </label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="start">
                                        DEGREE
                                    </label>
                                    <select>
                                        <option>select</option>
                                        <option>high school diploma</option>
                                        <option>bachelor of science</option>
                                    </select>
                                </div>
                                <div className="name">
                                    <label htmlFor="start">
                                        FIELD OF STUDY
                                    </label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='buttons-continue'>
                                <Link to='/resumeData/skills' className='continue' type='submit'>Continue</Link> 
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Education