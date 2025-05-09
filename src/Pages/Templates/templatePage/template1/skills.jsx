import './template1.css'
import { Link } from 'react-router-dom'

function Skills(){
    return (
        <>
            <form className="first-part">
                        <div className="header">
                          <h1>Enter your different skills</h1>
                          <p>Include both industrial skills and soft skills</p>
                          <p>Enter at least 5 skills</p>
                        </div>
                        <div className="form">
                            <div class="roles">
                                <h2>Skills</h2>
                                <div className="flex">
                                    <div className="name">
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                        <input type="text" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <butt className="add-skills">
                                Add skills
                            </butt>
                            <div className='buttons-continue'>
                                <Link to='/resumeData/summary' className='continue' type='submit'>Continue</Link> 
                            </div>
                        </div>
            </form>
        </>
    )
}

export default Skills