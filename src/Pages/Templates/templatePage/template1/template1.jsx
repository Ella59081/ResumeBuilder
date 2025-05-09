import './template1.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function Template1() {

    // const ContinueButton = (padding, text, backgroundColor, borderRaduis, width) =>{
    // }

    return(
        <>
          <div className='con-temp'>
                <div className="side">
                 <img src="/src/assets/images/file-solid (2).svg" alt="" />
                 <div style={{marginTop: "30px"}} className="sect">
                    <span>1</span>
                 </div>
                 <div className="sect">
                    <span>2</span>
                 </div>
                 <div className="sect">
                    <span>3</span>
                 </div>
                 <div className="sect">
                    <span>4</span>
                 </div>
                 <div className="sect">
                    <span>5</span>
                 </div>
                </div>
                <div className="main-temp">
                    <section className="detForm">
                        <Outlet />
                    </section>
                    <div className="photo">
                        <div className="temp-des">
                            <div className="side-in"></div>
                            <div className="main-in">
                                <div className="header-in">
                                    <h6>JEREMY FISHER</h6>
                                    <p>KNOWLEDGEABLE SOCIAL MEDIA</p>
                                </div>
                                <div className="summary">
                                    <div className="left">
                                        <div className="prof">
                                            <h6>PROFESSIONAL SUMMARY</h6>
                                            <p className="top">Creative social media manager with
                                                proven record of success in building
                                                brand awareness, increasing followers
                                                and patnering with top influencers 
                                                throughout the country.
                                            </p>
                                        </div>
                                        <div className="work">
                                            <h6>WORK HISTORY</h6>
                                            <h6>Social Media Manager</h6>
                                            <p>
                                                infasec social media manager since march 2021
                                            </p>
                                            <p className="top">
                                              . Develop marketing content
                                            </p>
                                            <p>. Analyze reported social media</p>
                                            <p>. Curate and segment content to increase engagement</p>
                                        </div>
                                        <div className="title2">
                                            <h6>Digital Marketing Coordinator</h6>
                                            <h6>Social Media Manager</h6>
                                            <p>
                                                infasec social media manager since march 2021
                                            </p>
                                            <p className="top">
                                              . Develop marketing content
                                            </p>
                                            <p>. Analyze reported social media</p>
                                            <p>. Curate and segment content to increase engagement</p>
                                        </div>
                                        
                                    </div>
                                    <div className="right">
                                        <div className="contact">
                                            <h6>CONTACT</h6>
                                            <p className='top'>
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
                                        <div className="skills">
                                            <h6>SKILLS</h6>
                                            <p className="top">. Market research</p>
                                            <p>. Budgeting</p>
                                            <p>. Scheduling</p>
                                            <p>. Scheduling</p>
                                        </div>
                                        <div className="education">
                                            <h6>EDUCATION</h6>
                                            <p className="top">Bachelor of arts</p>
                                            <p>Communications and marketing</p>
                                            <p>university of wiscondion</p>
                                        </div>
                                        <div className="certifications">
                                            <h6>CERTIFICATION</h6>
                                            <p className="top">Google data analytics</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </>
    )
}


export default Template1