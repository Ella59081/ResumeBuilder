import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { XIcon } from 'lucide-react'
import { Plus } from 'lucide-react'
import { useSteps } from '../../../../contexts/completeSteps';

function Skills(){

    const {updateForm, formData} = useContext(FormContext);
    const { setCompleted, completed} = useSteps();


    const navigate = useNavigate();

    const [allSkills, setAllSkills] = useState([])

    const [skillNo, setSkillNo] = useState(2)


    const addSkill = () =>{
        setAllSkills([...allSkills, '']);
        // setAllSkills(allSkills =>[...allSkills, {name: ''}]),
        // updateForm('skills', allSkills)
        setSkillNo((prev) => prev + 1)
    } 

    const deleteSkills = (index) =>{
        setAllSkills((prev) => prev.filter((_,i) => i !== index));
        // updateForm('skills', allSkills)
        const stored = JSON.parse(localStorage.getItem('formData'));

        const storedSkills = stored.skills || {};

        const keys = Object.keys(storedSkills)
        const fKeys = Object.keys(formData.skills)
        if(keys[index + 2]){
            delete storedSkills[keys[index + 2]]
            localStorage.setItem('formData', JSON.stringify(stored))

            
        }else if(keys[index]){
            delete storedSkills[keys[index]]
            localStorage.setItem('formData', JSON.stringify(stored))
        }

        if(fKeys[index + 2]){
            delete formData.skills[fKeys[index + 2]]
            updateForm('formData', formData)
        }else if(keys[index]){
            delete formData.skills[fKeys[index]]
            updateForm('formData', formData)
        }

        setSkillNo((prev) => prev - 1)

    }

    const [formErrors, setFormErrors] = useState({})


    const handleChange = (e) => {
        const {name, value} = e.target;
        updateForm('skills', {[name] : value});

        if (formErrors[name]) {
            setFormErrors((prev) => ({ ...prev, [name]: "" }));
        }
    }

    const validate = () =>{
        const errors = {}
        const skills = Object.keys(formData.skills).length < 2 

        if (skills) {
            errors.skills = "Add at least two skills";
        }
        setFormErrors(errors)

        return Object.keys(errors).length === 0;
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            navigate('/resumeData/summary')
            console.log('skills filled')
            setCompleted(prev => ({...prev, step4: 'completed'}))
            console.log(completed)

        }else{
            console.log(formErrors)
        }
    }

    const [isActive, setIsActive] = useState(false)
    const activate = () => {
        setIsActive(true)
    }

    
    return (
        <>
            <form className="first-part" onSubmit={handleSubmit}>
                        <div className="header">
                          <h1>Enter your different skills</h1>
                          <p>Include both industrial skills and soft skills</p>
                          <p>Enter at least 2 skills, maximum of 10 skills</p>
                        </div>
                        <div className="form">
                            <div class="roles">
                                <h2>Skills</h2>
                                
                                <div className="flex">
                                    <div className="name theSkills">
                                        <input type="text" onclick={activate} style={{isActive}} name='skill1' onChange={handleChange} />
                                        <input type="text" name='skill2' onChange={handleChange} />

                                        {
                                            allSkills.map((allSkills, index) =>(
                                                <li className='skill' key={index}>
                                                    <input  type="text" name={`skill${index + 3}`} onChange={handleChange}/>
                                                    <button onClick={() => deleteSkills(index)} className='delete' type='button'>
                                                        <XIcon size={20}/>
                                                    </button>
                                                </li>
                                            ))
                                        }
                                        {formErrors.skills && <p style={{marginTop: '-15px'}} className='errorMsg'>{formErrors.skills}!</p>}
                                    </div>
                                </div>
                            </div>
                            <button type='button' onClick={addSkill}
                              className="add-skills" disabled = {skillNo == 10}>
                                <Plus size={16}/> Add skill
                            </button>
                            <div className='buttons-continue'>
                                <button type='submit' className='continue'>Continue</button>
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Skills