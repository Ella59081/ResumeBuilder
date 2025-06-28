import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react';

function Experience(){

    const {updateForm, formData} = useContext(FormContext);


    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        updateForm('experience', {[name] : value});

        if (formErrors[name]) {
            setFormErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }

    const [formErrors, setFormErrors] = useState({})

    const validate = () =>{
        const errors = {}
        const jobTitle = formData.experience.title1
        const company = formData.experience.company
        const startDate = formData.experience.start_date
        const roles = !formData.experience.role1 
        && !formData.experience.role2 && !formData.experience.role3
        const role1 = formData.experience.role1 
        const role2 = formData.experience.role2
        const role3 = formData.experience.role3

        if (jobTitle == undefined) {
            errors.jobTitle = "Job Title is required";
        }else if(!jobTitle.trim()){
            errors.jobTitle = "Job Title is required";
        }
        if (company == undefined) {
            errors.company = "Company is required";
        }else if(!company.trim()){
            errors.company = "Company is required";
        }
        if (startDate == undefined) {
            errors.startDate = "Start Date is required";
        }else if(!startDate.trim()){
            errors.startDate = "Start Date is required";
        }  
        if(roles){
            errors.roles = 'Please add at least one role'
        }else if(!role1.trim && !role2.trim() && !role3.trim()){
            errors.roles = 'Please add at least one role'
        }
        setFormErrors(errors)

        return Object.keys(errors).length === 0;
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            navigate('/resumeData/education')
            console.log('experience filled')

        }else{
            console.log(formErrors)
        }
        
    }


    const [isAddded, setIsAdded] = useState(false);
    const addExperience =(e) =>{
        setIsAdded(true)
        e.preventDefault();
        if(validate()){
            navigate('/resumeData/experience2')
            console.log('experience filled')

        }else{
            console.log(formErrors)
            

        }
    }
    return (
        <>
            <form className="first-part longer" onSubmit={handleSubmit}>
                        <div className="header">
                          <h1>Enter your Experience</h1>
                          <p>Start with your most resent job then work backwards</p>
                          <p>Add maximum of three work experiences</p>
            
                        </div>
                        <div className="form">
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="title">
                                        JOB TITLE
                                    </label>
                                    <input type="text" name='title1' onChange={handleChange}/>
                                    {formErrors.jobTitle && <p className='errorMsg'>{formErrors.jobTitle}!</p> }
                                </div>
                                <div className="name">
                                    <label htmlFor="employer">
                                        EMPLOYER
                                    </label>
                                    <input type="text" name='employer' onChange={handleChange} />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="city">
                                        CITY
                                    </label>
                                    <input type="text" name='city' onChange={handleChange}/>
                                </div>
                                <div className="name">
                                    <label htmlFor="company">
                                        COMPANY
                                    </label>
                                    <input type="text" name='company' onChange={handleChange}/>
                                    {formErrors.company && <p className='errorMsg'>{formErrors.company}!</p> }

                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="start">
                                        START DATE
                                    </label>
                                    <input type="date" name="start_date" id="start"
                                     onChange={handleChange}
                                    />
                                    {formErrors.startDate && <p className='errorMsg'>{formErrors.startDate}!</p> }

                                </div>
                                
                            </div>
                            <div class="roles">
                                <h2>Roles</h2>
                                <div className="flex">
                                    <div className="name">
                                        <input type="text" name="role1" id="" 
                                           onChange={handleChange}
                                        />
                                        <input type="text" name="role2" id=""
                                           onChange={handleChange} 
                                        />
                                        <input type="text" name="role3" id=""
                                           onChange={handleChange} 
                                        />
                                        {formErrors.roles && <p className='errorMsg' style={{marginTop: '-15px'}} >{formErrors.roles}!</p> }
                                    </div>

                                </div>
                            </div>

                                                       
                            <div className='buttons-continue'>
                                <button type='submit' className='continue'>Continue</button>
                                <button type='button' onClick={addExperience} className="addex"><Plus size={16}/>Add experience</button> 
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Experience