import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { useSteps } from '../../../../contexts/completeSteps'

function PersonalDetails(){

    const {setCompleted, completed} = useSteps();
    const {updateForm, formData} = useContext(FormContext);
    // const [isCompleted, setIsCompleted] = useState({})
    // localStorage.setItem('completed', JSON.stringify(isCompleted))


    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        updateForm('personalDetails', {[name] : value});

        if (formErrors[name]) {
            setFormErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }

    const [formErrors, setFormErrors] = useState({})

    const validate = () =>{
        const errors = {}
        const firstName = formData.personalDetails.f_name
        const lastName = formData.personalDetails.l_name
        const Email = formData.personalDetails.email

        if (firstName == undefined) {
            errors.f_name = "First Name is required";
        }else if(!firstName.trim()){
            errors.f_name = "First Name is required";
        }
        if (lastName == undefined) {
            errors.l_name = "Last Name is required";
        }else if(!lastName.trim()){
            errors.l_name = "Last Name is required";
        }
        if (Email == undefined) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
            errors.email = "Email is invalid";
        }else if(!Email.trim()){
            errors.email = "Email is required";
        }
        setFormErrors(errors)

        return Object.keys(errors).length === 0;
        

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            navigate('/resumeData/experience')
            console.log('personal details filled')
            
            setCompleted(prev => ({...prev, step1: 'completed'}))
            console.log(completed)
            // localStorage.setItem('completed', JSON.stringify(isCompleted))
        }else{
            console.log(formErrors)
        }

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
                                    <input type="file" name="photo" hidden disabled id="photo"/>
                                    <span style={{color: "grey"}}>Add photo</span>
                                    <div>Rooms</div>
                                </label>
                            </div>
                        </div>
                        <div className="form">
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="firstName">
                                        FIRST NAME
                                    </label>
                                    <input type="text" name="f_name"
                                     
                                     onChange={handleChange}                                    
                                     />
                                     {formErrors.f_name && <p className='errorMsg'>{formErrors.f_name}!</p> }
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        LAST NAME
                                    </label>
                                    <input type="text" name="l_name"
                                     onChange={handleChange}
                                    
                                    />
                                    {formErrors.l_name && <p className='errorMsg'>{formErrors.l_name}!</p> }

                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="email">
                                        EMAIL
                                    </label>
                                    <input type="email" name="email" id="" 
                                    onChange={handleChange}
                                    />
                                    {formErrors.email && <p className='errorMsg'>{formErrors.email}!</p> }
                                </div>
                                <div className="name">
                                    <label htmlFor="phone">
                                        PHONE
                                    </label>
                                    <input type="number" name="phone" id="" 
                                     onChange={handleChange}
                                    />
                                    
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="country">
                                        ADDRESS
                                    </label>
                                    <input type="text" name="address"
                                     onChange={handleChange}
                                     />
                                </div>
                                
                            </div>
                            <button style={{marginTop: "50px"}} type='submit' className='continue'>Continue</button>
                            {/* <button  type="submit">submit</button> */}
                            
                        </div>
        </form>
        </>
    )
}

export default PersonalDetails