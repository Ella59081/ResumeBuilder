import './review.css'
import { Link } from 'react-router-dom'
function Review(){
    return(
        <>
            <div className="rev-con">
                <div className="revphoto">
                        <div className="revtemp-des">
                            <div className="revside-in"></div>
                            <div className="revmain-in">
                                <div className="revheader-in">
                                    <h6>JEREMY FISHER</h6>
                                    <p>KNOWLEDGEABLE SOCIAL MEDIA</p>
                                </div>
                                <div className="revsummary">
                                    <div className="revleft">
                                        <div className="revprof">
                                            <Link to='/resumeData/summary' className="edit"><img src="/src/assets/images/pen-solid (2).svg" alt="" /></Link>
                                            <h6>PROFESSIONAL SUMMARY</h6>
                                            <p className='top'>Creative social media manager with
                                                proven record of success in building
                                                brand awareness, increasing followers
                                                and patnering with top influencers 
                                                throughout the country. I did a lot of works 
                                                in terms of managing social media accounts.
                                            </p>
                                        </div>
                                        <div className="revwork">
                                            <Link to='/resumeData/experience' className="edit"><img src="/src/assets/images/pen-solid (2).svg" alt=""/></Link>
                                            <h6>WORK HISTORY</h6>
                                            <h6 className='top'>Social Media Manager</h6>
                                            <span>
                                                infasec social media manager since march 2021
                                            </span>
                                            <p className='top'>
                                              . Develop marketing content
                                            </p>
                                            <p>. Analyze reported social media</p>
                                            <p>. Curate and segment content to increase engagement</p>
                                        </div>
                                        <div className="revtitle2">
                                            <Link to='/resumeData/experience' className="edit"><img src="/src/assets/images/pen-solid (2).svg" alt="" /></Link>
                                            <h6>Digital Marketing Coordinator</h6>
                                            
                                            <span>
                                                infasec social media manager since march 2021
                                            </span>
                                            <p className='top'>
                                              . Develop marketing content
                                            </p>
                                            <p>. Analyze reported social media</p>
                                            <p>. Curate and segment content to increase engagement</p>
                                        </div>
                                        <div className="revtitle2">
                                            <Link to='/resumeData/experience' className="edit"><img src="/src/assets/images/pen-solid (2).svg" alt="" /></Link>
                                            
                                            <h6>Social Media Manager</h6>
                                            <span>
                                                infasec social media manager since march 2021
                                            </span>
                                            <p className='top'>
                                              . Develop marketing content
                                            </p>
                                            <p>. Analyze reported social media</p>
                                            <p>. Curate and segment content to increase engagement</p>
                                        </div>
                                        
                                    </div>
                                    <div className="revright">
                                        <div className="revcontact">
                                            <Link to='/resumeData' className="edit closer"><img src="/src/assets/images/pen-solid (2).svg" alt="" /></Link>
                                            <h6>CONTACT</h6>
                                            <p >
                                                <img src="/src/assets/images/phone-solid.svg" alt="" />
                                                080 567 543 12
                                            </p>
                                            <p>
                                                <img src="/src/assets/images/envelope-solid.svg" alt="" />
                                                example@gmail.com
                                            </p>
                                            <p>
                                                <img src="/src/assets/images/location-dot-solid.svg" alt="" />
                                                maddison, off close
                                            </p>
                                        </div>
                                        <div className="revskills">
                                            <Link to='/resumeData/skills' className="edit closer"><img src="/src/assets/images/pen-solid (2).svg" alt="" /></Link>
                                            <h6>SKILLS</h6>
                                            <p>. Market research</p>
                                            <p>. Budgeting</p>
                                            <p>. Scheduling</p>
                                            <p>. Scheduling</p>
                                            <p>. Scheduling</p>
                                        </div>
                                        <div className="reveducation">
                                            <Link to='/resumeData/education' className="edit closer"><img src="/src/assets/images/pen-solid (2).svg" alt="" /></Link>
                                            <h6>EDUCATION</h6>
                                            <p>Bachelor of arts</p>
                                            <p>Communications and marketing</p>
                                            <p>university of wiscondion</p>
                                        </div>
                                        <div className="rcertifications">
                                            <Link to='/resumeData/education' className="edit closer"><img src="/src/assets/images/pen-solid (2).svg" alt="" /></Link>
                                            <h6>CERTIFICATION</h6>
                                            <p>Google data analytics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                
                <div className="preview">
                    <div className="rev-buttons">
                        <button className='download'>Download</button>
                        <button className='download'>Email</button>
                    </div>
                    <div className="temp-rev">
                        <h4>Preview templates</h4>
                        <div className="temps-grid">
                            <Link to="/resumeData" className="template" id="temp-1">
                                <img src="/src/assets/images/template(1).svg" alt="" />
                            </Link>
                            <Link to="/resumeData" className="template" id="temp-1">
                                <img src="/src/assets/images/template(2).svg" alt="" />
                            </Link>
                            <Link to="/resumeData" className="template" id="temp-1">
                                <img src="/src/assets/images/resume-Template (1).avif" alt="" />
                            </Link>
                            <Link to="/resumeData" className="template" id="temp-1">
                                <img src="/src/assets/images/template(1).svg" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review