import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
// import { detailsSchema } from '../../../../validations/formDataSchema'

function Experience2(){

        const {updateForm, formData} = useContext(FormContext);
    
    
        const navigate = useNavigate();
    
        const handleChange = (e) =>{
            const {name, value} = e.target;
            updateForm('experience2', {[name] : value});
        }
    
        const handleSubmit = (e) =>{
            e.preventDefault();
            navigate('/resumeData/education')
        }

    const [isAddded, setIsAdded] = useState(false);
    const addExperience =() =>{
        setIsAdded(true)
    }
    return (
        <>
            <form className="first-part longer">
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
                                    <input type="text" name='job2' />
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        EMPLOYER
                                    </label>
                                    <input type="text" name='employer'/>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="city">
                                        CITY
                                    </label>
                                    <input type="text"  name='city'/>
                                </div>
                                <div className="name">
                                    <label htmlFor="country">
                                        COMPANY
                                    </label>
                                    <input type="text" name='company'/>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="start">
                                        START DATE
                                    </label>
                                    <input type="date" name="start_date" id="" />
                                </div>
                                <div className="name">
                                    <label htmlFor="end">
                                        END DATE
                                    </label>
                                    <input type="date" name="end_date" id="" />
                                </div>
                            </div>
                            <div class="roles">
                                <h2>Roles</h2>
                                <div className="flex">
                                    <div className="name">
                                        <input type="text" name="role1" id="" />
                                        <input type="text" name="role2" id="" />
                                        <input type="text" name="role3" id="" />
                                    </div>
                                </div>
                            </div>

                                                       
                            <div className='buttons-continue'>
                                <Link to='/resumeData/education' className='continue' type='submit'>Continue</Link>
                                <Link to='/resumeData/experience3' onClick={addExperience} className="addex"><span>+ </span>Add experience</Link>  
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Experience2