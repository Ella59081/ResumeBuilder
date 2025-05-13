import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'

function PersonalDetails(){

    const {updateForm, formData} = useContext(FormContext);

    // const [data, setData] = useState({
    //     f_name: "",
    //     l_name: "",
    //     phone: 0,
    //     email: "",
    //     address: "",
    // });
    
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        updateForm('personalDetails', {[name] : value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // updateForm('personalDetails', data);
        let personalInfo = []
        personalInfo.push(localStorage.setItem("personalDetails", JSON.stringify(PersonalDetails)))
    }


    return(
        <>
        <form className="first-part" onSubmit={handleSubmit}>
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
                                    <input type="text" name="f_name" onChange={handleChange}/>
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        LAST NAME
                                    </label>
                                    <input type="text" name="l_name" onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="email">
                                        EMAIL
                                    </label>
                                    <input type="email" name="email" id="" onChange={handleChange}/>
                                </div>
                                <div className="name">
                                    <label htmlFor="phone">
                                        PHONE
                                    </label>
                                    <input type="number" name="phone" id="" onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="country">
                                        ADDRESS
                                    </label>
                                    <input type="text" name="address" onChange={handleChange}/>
                                </div>
                                
                            </div>
                            <Link onClick={handleSubmit} style={{marginTop: "50px"}} to='/resumeData/experience' className='continue'>Continue</Link>
                            {/* <button onClick={handleSubmit} type="submit">submit</button> */}
                            
                        </div>
        </form>
        </>
    )
}

export default PersonalDetails