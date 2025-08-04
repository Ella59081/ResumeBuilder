import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { useSteps } from '../../../../contexts/completeSteps';

function Summary(){

    const {updateForm, formData} = useContext(FormContext);
    const { setCompleted, completed} = useSteps();
    
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        updateForm('summary', {[name] : value});

        if (formErrors[name]) {
            setFormErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }

    const [formErrors, setFormErrors] = useState({})

    const validate = () =>{
        const errors = {}
       
        const noSummary = formData.summary.professionalSummary === undefined
         const summary =  formData.summary.professionalSummary

        if (noSummary){
            errors.summary = 'Please add a detailed summary';
        }else if (Object.keys(summary).length == 0) {
            errors.summary = "Please add a detailed summary";
        }else if(Object.keys(summary).length < 50){
            errors.summary = 'Summary cannot be less than 50 characters'
        }else if (Object.keys(summary).length > 500){
            errors.summary = 'Summary is too long'
        }
        setFormErrors(errors)

        return Object.keys(errors).length === 0;
        
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            navigate('/review')
            console.log('summmary filled')
            setCompleted(prev => ({...prev, step5: 'completed'}))
            console.log(completed)

        }else{
            console.log(formErrors)
        }
    }

    return (
        <>
            <form className="first-part" onSubmit={handleSubmit}>
                        <div className="header">
                          <h1>Enter your professional summary</h1>
                          <p>Make it as detailed as possible</p>
                        </div>
                        <div className="form">
                            <textarea name="professionalSummary" id="" onChange={handleChange}></textarea>
                            {formErrors.summary && <p style={{marginTop: '-15px', fontSize: '13px', color: 'red'}} className='errorMsg'>{formErrors.summary}!</p>}
                            <button style={{marginTop: "50px"}} type='submit' className='continue'>Continue</button>
                            
                        </div>
            </form>
        </>
    )
}

export default Summary