import './template1.css'
import { Link } from 'react-router-dom'

function PersonalDetails(){
    return(
        <>
        <form className="first-part">
                        <div className="header">
                          <h1>Enter your Personal Details</h1>
                          <p>Include your full name and ways for employers to reach you</p>
                        </div>
                        <div className="add-photo">
                            <div className="inimg"></div>
                            <div className="add-text">
                                <p>Add a photo to your resume</p>
                                <label htmlFor="photo" className='photo-add'>
                                    <input type="file" name="photo" id="photo" hidden/>
                                    <span>Add photo</span>
                                </label>
                            </div>
                        </div>
                        <div className="form">
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="firstName">
                                        FIRST NAME
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        LAST NAME
                                    </label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="country">
                                        COUNTRY, CITY
                                    </label>
                                    <input type="text" />
                                </div>
                                <div className="name">
                                    <label htmlFor="phone">
                                        PHONE
                                    </label>
                                    <input type="number" name="" id="" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="email">
                                        EMAIL
                                    </label>
                                    <input type="email" name="" id="" />
                                </div>
                                
                            </div>
                            <Link style={{marginTop: "50px"}} to='/resumeData/experience' className='continue' type='submit'>Continue</Link>
                        </div>
        </form>
        </>
    )
}

export default PersonalDetails