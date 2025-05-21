import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
// import { detailsSchema } from '../../../../validations/formDataSchema'


function Summary(){

    const {updateForm, formData} = useContext(FormContext);

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        updateForm('summary', {[name] : value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/resumeData/experience')
    }

    return (
        <>
            <form className="first-part">
                        <div className="header">
                          <h1>Enter your professional summary</h1>
                          <p>Make it as detailed as possible</p>
                        </div>
                        <div className="form">
                            <textarea name="professionalSummary" id="" onChange={handleChange}></textarea>
                            <div className='buttons-continue'>
                                <Link to='/review' className='continue' type='submit'>Continue</Link> 
                            </div>
                            
                        </div>
            </form>
        </>
    )
}

export default Summary