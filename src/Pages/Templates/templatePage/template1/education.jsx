import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
// import { detailsSchema } from '../../../../validations/formDataSchema'

function Education(){

        const {updateForm, formData} = useContext(FormContext);
            
            
        const navigate = useNavigate();
            
        const handleChange = (e) =>{
            const {name, value} = e.target;
            updateForm('education', {[name] : value});
        }
            
        const handleSubmit = (e) =>{
            e.preventDefault();
            navigate('/resumeData/skills')
        }

        const [hasField, setHasField] = useState(true)

        const  HighSchool = () =>{
            setHasField(false);

            console.log(hasField)
        }

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
                                    <input type="text" name='school'
                                    onChange={handleChange}/>
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        SCHOOL LOCATION
                                    </label>
                                    <input type="text" name='location'
                                     onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="flex">
                                
                                <div className="name">
                                    <label htmlFor="country">
                                        GRADUATION DATE
                                    </label>
                                    <input type="date" name='grad_date' onChange={handleChange} />
                                </div>
                                <div className="name">
                                    <label htmlFor="country">
                                        CERTIFICATION
                                    </label>
                                    <input type="text" name='certification'  onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="start">
                                        DEGREE
                                    </label>
                                    <select name='degree' onChange={handleChange}>
                                        <option>select</option>
                                        <option onAuxClick={HighSchool}>high school diploma</option>
                                        <option>bachelor of science</option>
                                    </select>
                                </div>
                                <div className="name">
                                    <label htmlFor="start">
                                        FIELD OF STUDY
                                    </label>
                                    <input type="text" name='field'
                                     onChange={handleChange}  
                                     disabled={hasField== false}/>
    
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