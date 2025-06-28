import './template1.css'
import { useState, useEffect, useContext } from 'react';
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'


function Education(){

        const {updateForm, formData} = useContext(FormContext);
            
            
        const navigate = useNavigate();
            
        const handleChange = (e) =>{
            const {name, value} = e.target;
            updateForm('education', {[name] : value});

            if (formErrors[name]) {
                setFormErrors((prev) => ({ ...prev, [name]: "" }));
            }
        }

        const [formErrors, setFormErrors] = useState({})

        const validate = () =>{
        const errors = {}

        const location = formData.education.location;
        const school = formData.education.school;
        const noDegree = !formData.education.degree || formData.education.degree === 'High School Diploma';
        // const degree = formData.education.degree;
        const degree = formData.education.degree?  
        !formData.education.degree.trim(): formData.education.degree == undefined || formData.education.degree === 'High School Diploma'
        const high = formData.education.degree === 'High School Diploma'
        const noField = !formData.education.field;
        const field = formData.education.field? 
        !formData.education.field.trim(): formData.education.field == undefined
        const noGrad = !formData.education.grad_date;
        const gradDate = formData.education.grad_date? 
        !formData.education.grad_date.trim(): 
        formData.education.grad_date == undefined
        const noCert = !formData.education.certification;
        
        
        const cert = formData.education.certification? 
        !formData.education.certification.trim(): 
        formData.education.certification == undefined

        if (location == undefined) {
            errors.location = "Location is required";
        }else if(!location.trim()){
            errors.location = "Location is required";
        }
        if (school == undefined) {
            errors.school = "School is required";
        }else if(!school.trim()){
            errors.school = "School is required";
        }
        if (noDegree && degree  && !noField && !field) {
            errors.degree = "Degree is required";
        }else if(!noField && !field && noGrad && gradDate){
            errors.grad = "Graduation date is required";
        }else if(!noField && !field && noCert && cert){
            errors.certification = 'Certification is required';
        }
        if(!noDegree && !degree && noField && field){
            errors.field = 'Field of study is required'
        }else if(!noDegree && !degree && noGrad && gradDate){
            errors.grad = 'Graduation date is required'
        }else if(!noDegree && !degree && noCert && cert){
            errors.certification = 'Certification is required'
        }else if(!noCert && !cert && noField && field){
            errors.field = 'Field of Study is required'
        }else if(!noCert && !cert && noDegree && degree){
            errors.degree = 'Degree is required'
        }else if(noCert && !cert && noGrad && gradDate){
            errors.grad = 'Graduation date is required'
        }
        if(high && noGrad && gradDate){
            errors.grad = 'Graduation date is required'
        }
        
        
        setFormErrors(errors)

        return Object.keys(errors).length === 0;
        }

            
        const handleSubmit = (e) =>{
            e.preventDefault();
            if(validate()){
                navigate('/resumeData/skills')
                console.log('education filled')

            }else{
                console.log(formErrors)
            }
        }
      
        const [hasField, setHasField] = useState(true);
        // const [isSelected, setIsSelected] = useState(false);
        useEffect(() =>
            {
                
            const degree = formData.education.degree
            if(degree !== undefined && degree == "High School Diploma" ){
                setHasField(false)
            }else{
                setHasField(true)
            }

            console.log(hasField)

            })

    return (
        <>
            <form className="first-part" onSubmit={handleSubmit}>
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
                                    <input type="text" name='school'
                                    onChange={handleChange}/>
                                    {formErrors.school && <p className='errorMsg'>{formErrors.school}!</p> }
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        SCHOOL LOCATION
                                    </label>
                                    <input type="text" name='location'
                                     onChange={handleChange}/>
                                    {formErrors.location && <p className='errorMsg'>{formErrors.location}!</p> }

                                </div>
                            </div>
                            <div className="flex">
                                
                                <div className="name">
                                    <label htmlFor="country">
                                        GRADUATION DATE
                                    </label>
                                    <input type="date" name='grad_date' onChange={handleChange} />
                                    {formErrors.grad && <p className='errorMsg'>{formErrors.grad}!</p> }
                                </div>
                                <div className="name">
                                    <label htmlFor="country">
                                        CERTIFICATION
                                    </label>
                                    <input type="text" name='certification'  onChange={handleChange}/>
                                    {formErrors.certification && <p className='errorMsg'>{formErrors.certification}!</p> }
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="start">
                                        DEGREE
                                    </label>
                                    <select name='degree' onChange={handleChange}>
                                        <option disabled selected>select</option>
                                        <option>High School Diploma</option>
                                        <option>bachelor of science</option>
                                    </select>
                                    {formErrors.degree && <p className='errorMsg'>{formErrors.degree}!</p> }
                                </div>
                                <div className="name">
                                    <label htmlFor="start">
                                        FIELD OF STUDY
                                    </label>
                                    <input type="text" name='field'
                                     onChange={handleChange}  
                                     disabled={hasField == false}/>
                                    {formErrors.field && <p className='errorMsg'>{formErrors.field}!</p> }
    
                                </div>
                                
                            </div>
                            <div className='buttons-continue'>
                                <button type='submit' className='continue'>Continue</button>
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Education