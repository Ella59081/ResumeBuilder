import './template1.css'
import { useState, useContext } from 'react';
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react';

function Experience2(){

        const {updateForm, formData} = useContext(FormContext);
    
    
        const navigate = useNavigate();
    
        const handleChange = (e) =>{
            const {name, value} = e.target;
            updateForm('experience2', {[name] : value});

            if (formErrors[name]) {
                setFormErrors((prev) => ({ ...prev, [name]: "" }));
            }
        }

        const [formErrors, setFormErrors] = useState({})

        const validate = () =>{
        const errors = {}
        const jobTitle = formData.experience2.job2
        const company = formData.experience2.company
        const startDate = formData.experience2.start_date
        const endDate = formData.experience2.end_date
        const roles = !formData.experience2.role1 
        && !formData.experience2.role2 && !formData.experience2.role3
        const role1 = formData.experience2.role1 
        const role2 = formData.experience2.role2
        const role3 = formData.experience2.role3

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
        if(endDate == undefined){
            errors.endDate = 'End Date is required'
        }else if(!endDate.trim()){
            errors.endDate = 'End Date is required'
        }else if(startDate > endDate){
            errors.endDate = 'Start Date should be earlier than the end date'
        }else if(startDate === endDate){
            errors.endDate = 'Start Date cannot be the same as the end date'
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
                console.log('2nd experience filled')

            }else{
                console.log(formErrors)
            }
        }

    const [isAddded, setIsAdded] = useState(false);
    const addExperience =(e) =>{
        setIsAdded(true)
        e.preventDefault();
        if(validate()){
            navigate('/resumeData/experience3')
            console.log('2nd experience filled')

        }else{
            console.log(formErrors)
            

        }
    }

    return (
        <>
            <form className="first-part longer" onSubmit={handleSubmit}>
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
                                    <input type="text" name='job2'
                                     onChange={handleChange}/>
                                    {formErrors.jobTitle && <p className='errorMsg'>{formErrors.jobTitle}!</p> }
                                </div>
                                < div className="name">
                                    <label htmlFor="lastName">
                                        EMPLOYER
                                    </label>
                                    <input type="text" name='employer'
                                     onChange={handleChange}/>
                                </ div>
                            </ div>
                            < div className="flex">
                                <div className="name">
                                    <label htmlFor="city">
                                        CITY
                                    </label>
                                    <input type="text"  name='city'
                                     onChange={handleChange}/>
                                </div>
                                <div className="name">
                                    <label htmlFor="country">
                                        COMPANY
                                    </label>
                                    <input type="text" name='company'
                                     onChange={handleChange}/>
                                    {formErrors.company && <p className='errorMsg'>{formErrors.company}!</p> }

                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="start">
                                        START DATE
                                    </label>
                                    <input type="date" name="start_date" id="" 
                                     onChange={handleChange}/>
                                    {formErrors.startDate && <p className='errorMsg'>{formErrors.startDate}!</p> }
                                    
                                </div>
                                <div className="name">
                                    <label htmlFor="end">
                                        END DATE
                                    </label>
                                    <input type="date" name="end_date" id="" 
                                     onChange={handleChange}/>
                                    {formErrors.endDate && <p className='errorMsg'>{formErrors.endDate}!</p> }
                                    
                                </div>
                            </div>
                            <div class="roles">
                                <h2>Roles</h2>
                                <div className="flex">
                                    <div className="name">
                                        <input type="text" name="role1" id="" 
                                         onChange={handleChange}/>
                                        <input type="text" name="role2" id="" 
                                         onChange={handleChange}/>
                                        <input type="text" name="role3" id="" 
                                         onChange={handleChange}/>
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

export default Experience2