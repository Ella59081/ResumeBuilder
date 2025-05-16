import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
// import { detailsSchema } from '../../../../validations/formDataSchema'

function Experience(){

    const {updateForm, formData} = useContext(FormContext);


    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        updateForm('experience', {[name] : value});
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
                                    </div>
                                </div>
                            </div>

                                                       
                            <div className='buttons-continue'>
                                <Link to='/resumeData/education' className='continue' type='submit'>Continue</Link>
                                <Link to='/resumeData/experience2' onClick={addExperience} className="addex"><span>+ </span>Add experience</Link>  
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Experience