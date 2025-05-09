import { Link } from 'react-router-dom'
import './home.css'

function Home(){
    return(
        <>
        <div className="con">
            <div className="about">
                <div className="info">
                    <h1>Job-Winning Resume Templates</h1>
                    <p>Choose a prefered template of your choice from different templates. Click to add ready-to-use skills and phrases to your template.</p>
                    <Link to="/templates"><button>Choose a template</button></Link>
                </div>
                <div className="pic">
                    <img className='profile' src="/src/assets/images/bg-with-men.png" alt="" />
                    <div className="shadow"></div>
                    <img className='resume' src="/src/assets/images/resume-Template (1).avif" alt=""/>
                </div>
            </div>
            <div className="create">
                <div className="title">
                    <h1>Create a resume that gets results</h1>
                </div>
                <div className="grid">
                    <div className="items">
                        <img src="/src/assets/images/choose-template-icon.png" alt="" />
                        <p>Choose a recruiter-approved template ready to use and job ready.</p>
                    </div>
                    <div className="items">
                        <img src="/src/assets/images/design-formatting-icon.png" alt="" />
                        <p>Add skills, job requirements and bullet points in one click.</p>
                    </div>
                    <div className="items">
                        <img src="/src/assets/images/customize-icon.png" alt="" />
                        <p>Finish your resume in minutes. Quick, simple and easy process.</p>
                    </div>
                    <div className="items">
                        <img src="/src/assets/images/download-template-icon.png" alt="" />
                        <p>Download in Word or PDF. Finish your resume and download as you like.</p>
                    </div>
                </div>
                <Link to="templates">Create my resume</Link>
            </div>
            <div className="see-temp">
                <h1>Explore our excelent templates</h1>
                <div className="temp-grid">
                    <div>
                        <img src="/src/assets/images/template(1).svg" alt="" />
                        <a className='use' href="">Use this template</a>
                    </div>
                    <div>
                        <img src="/src/assets/images/template(2).svg" alt="" />
                        <a className='use' href="">Use this template</a>
                    </div>
                    <div>
                        <img src="/src/assets/images/resume-Template (1).avif" alt="" />
                        <a className='use' href="">Use this template</a>
                    </div>
                </div>
            </div>
            <div className="how-to">
                <h1>How to build resume?</h1>
                <p>Fast and Easy steps</p>
                <div className="steps">
                    <div className="cards">
                        <div className="card">
                            <h1>01</h1>
                            <h2>Select a template</h2>
                            <p>First pick a template. Select a template from 
                                our variety of beautiful templates
                                Choose a recruiter-approved template ready to use and job ready.
                                Our templates suit all job types and can be used to apply whenever necessary.
                            </p>
                        </div>
                        <div className="card">
                            <h1 className='blue'>02</h1>
                            <h2>Fill in your details</h2>
                            <p>Fill in all necessary details for your resume, Add
                                your details and ways for employers to reach you
                                Add your personal details, contact info, skills and eductaional 
                                background. Itemize bullet points in one click.
                            </p>
                        </div>
                        <div className="card">
                            <h1 className='yellow'>03</h1>
                            <h2>Review your resume</h2>
                            <p>After entering all the necessary details do a quick 
                                review of what you've written so far. You can then 
                                change the template or edit what you've written.
                                Customize your resume however you like. its never been easier.
                            </p>
                        </div>
                        <div className="card">
                            <h1 className='green'>04</h1>
                            <h2>Dowload your resume</h2>
                            <p>After entering all the necessary details and reviewing 
                                your work, you can now download your resume either in 
                                pdf format or word format. Finish your resume within
                                minuites and download as you wish.
                            </p>
                        </div>
                    </div>
                    <Link to="templates">Build resume now</Link>
                </div>
            </div>
            div
        </div>
        
        </>
    )
}

export default Home