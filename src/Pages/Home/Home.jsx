import { Link } from 'react-router-dom'
import './home.css'
import '../../responsive.css'
import Header from '../../components/Header/header.jsx'
import { useTemplate } from '../../contexts/provideTemplate'
import bgMen from '../../assets/images/bg-with-men.png'
import rTemp from '../../assets/images/resume-Template (1).avif'

function Home(){

    const {templates, setPickTemplate, setNoTemplate} = useTemplate()
    
    return(
        <>
        <Header/>
        <div className="con">
            <div className="about">
                <div className="info">
                    <h1>Job-Winning Resume Templates</h1>
                    <p>Choose a prefered template of your choice from different templates. Click to add ready-to-use skills and phrases to your template.</p>
                    <Link to="/templates"><button>Choose a template</button></Link>
                </div>
                <div className="pic">
                    <img className='profile' src={bgMen} alt="" />
                    <div className="shadow"></div>
                    <img className='resume' src={rTemp} alt=""/>
                </div>
            </div>
            <div className="see-temp">
                <h1>Explore our excelent templates</h1>
                <div className="temp-grid">
                    {
                        templates.map((template, index) =>(
                            <div key={index}>
                                <img src={template.style.image} alt="" />
                                <Link onClick={ ()=> {
                                    setPickTemplate(template)
                                    setNoTemplate(false)
                                }} to="/resumeData"className='use'>Use this template</Link>
                            </div>
                        )) 
                        
                    }
                    {/* <div>
                        <img src="/src/assets/images/template(1).svg" alt="" />
                        <Link to="templates"className='use'>Use this template</Link>
                    </div>
                    <div>
                        <img src="/src/assets/images/template(2).svg" alt="" />
                        <Link to="templates"className='use'>Use this template</Link>
                    </div>
                    <div>
                        <img src="/src/assets/images/template(4).svg" alt="" />
                        <Link to="templates"className='use'>Use this template</Link>
                    </div> */}
                </div>
            </div>
            <div className="how-to">
                <h1>How to build resume?</h1>
                <p>Fast and Easy steps</p>
                <div className="steps">
                    <div className="cards">
                        <div className="card">
                            {/* <h1>01</h1> */}
                            <img src="/src/assets/images/choose-template-icon.png" alt="" />
                            <h2>Select a template</h2>
                            <p>First pick a template. Select a template from 
                                our variety of beautiful templates
                                Choose a recruiter-approved template ready to use and job ready.
                                Our templates suit all job types and can be used to apply whenever necessary.
                            </p>
                        </div>
                        <div className="card">
                            {/* <h1 className='blue'>02</h1> */}
                            <img src="/src/assets/images/design-formatting-icon.png" alt="" />
                            <h2>Fill in your details</h2>
                            <p>Fill in all necessary details for your resume, Add
                                your details and ways for employers to reach you
                                Add your personal details, contact info, skills and eductaional 
                                background. Itemize bullet points in one click.
                            </p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/images/customize-icon.png" alt="" />
                            <h2>Review your resume</h2>
                            <p>After entering all the necessary details do a quick 
                                review of what you've written so far. You can then 
                                change the template or edit what you've written.
                                Customize your resume however you like. its never been easier.
                            </p>
                        </div>
                        <div className="card">
                            <img src="/src/assets/images/download-template-icon.png" alt="" />
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
            <div className="start-now">
                <div className="inner-div">
                    <div>
                        <h1>Build your resume now</h1>
                        <p>
                            Start building your resume and apply for jobs
                            Don't be the last to get a stylish job-ready resume.
                        </p>
                    </div>
                    <Link to="templates">Build my resume</Link>
                </div>
            </div>
            <div className="footer">
                <div className="foot1">
                    <Link to="/" className='logo'  href=""><img src="/src/assets/images/logo-resume-now.svg" alt="" /></Link>
                    <div className="socails">
                        <span>
                            <svg className="face" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                        </span>
                        <span>
                            <svg className="l-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </span>
                        <span>
                            <svg className="y-tube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                        </span>
                        <span>
                            <svg className="tiktok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                        </span>
                        <span>
                            <svg className="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                        </span>
                    </div>
                </div>
                <div className="foot2">
                    <p>© 2025, ResumeNow. All rights reserved</p>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Home