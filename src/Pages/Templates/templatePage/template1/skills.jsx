import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
// import { detailsSchema } from '../../../../validations/formDataSchema'

function Skills(){

    const {updateForm, formData} = useContext(FormContext);

    const navigate = useNavigate();

    const [allSkills, setAllSkills] = useState([
        
    ])

    const [skillNo, setSkillNo] = useState(2)


    const addSkill = () =>{
        setAllSkills([...allSkills, '']);
        // setAllSkills(allSkills =>[...allSkills, {name: ''}]),
        // updateForm('skills', allSkills)
        setSkillNo((prev) => prev + 1)
        console.log(skillNo)
    } 

    const deleteSkills = (index) =>{
        setAllSkills((prev) => prev.filter((_,i) => i !== index));
        // updateForm('skills', allSkills)
        const stored = JSON.parse(localStorage.getItem('formData'));

        const storedSkills = stored.skills || {};

        Object.keys(storedSkills).filter((_,i) => i !== index)
        updateForm('skills', storedSkills); 

        setSkillNo((prev) => prev - 1)

        console.log(stored)
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        updateForm('skills', {[name] : value});

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/resumeData/summary')
    }

    
    return (
        <>
            <form className="first-part">
                        <div className="header">
                          <h1>Enter your different skills</h1>
                          <p>Include both industrial skills and soft skills</p>
                          <p>Enter at least 2 skills, maximum of 8 skills</p>
                        </div>
                        <div className="form">
                            <div class="roles">
                                <h2>Skills</h2>
                                {/* <div className="flex">
                                    <div className="name">
                                        <input type="text" name="skill1" id="" onChange={handleChange}/>
                                        <input type="text" name="skill2" id="" onChange={handleChange}/>
                                        <input type="text" name="skill3" id="" onChange={handleChange}/>
                                        <input type="text" name="skill4" id="" onChange={handleChange}/>
                                        <input type="text" name="skill5" id="" onChange={handleChange}/>
                                    </div>
                                </div> */}
                                <div className="flex">
                                    <div className="name theSkills">
                                        <input type="text" name='skill1' onChange={handleChange} />
                                        <input type="text" name='skill2' onChange={handleChange} />
                                        {
                                            allSkills.map((allSkills, index) =>(
                                                <li className='skill' key={index}>
                                                    <input type="text" name={`skill${index + 3}`} onChange={handleChange}/>
                                                    <button onClick={() => deleteSkills(index)} className='delete' type='button'>
                                                        <img src="/src/assets/images/xmark-solid.svg" alt="" />
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <button type='button' onClick={addSkill} 
                              className="add-skills" disabled = {skillNo == 8}>
                                + Add skills 
                            </button>
                            <div className='buttons-continue'>
                                <Link to='/resumeData/summary' className='continue' type='submit'>Continue</Link> 
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Skills