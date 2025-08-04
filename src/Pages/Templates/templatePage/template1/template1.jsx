
import './template1.css'
import '../../../../responsive.css'
import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { FormContext } from '../../../../contexts/FormContext'
import Overview from '../../../overview/overview'
import { useSteps } from '../../../../contexts/completeSteps'
import { Check } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { MapPinIcon } from 'lucide-react'
import { XIcon } from 'lucide-react'
import { useTemplate } from '../../../../contexts/provideTemplate'


function Template1() {


    const {formData} = useContext(FormContext);
    const {pickTemplate, noTemplate} = useTemplate()

    const {steps, completed} = useSteps();

    const [isClicked, setIsClicked] = useState(false)

    const openOverview = () =>{
        setIsClicked(true)
    }

    const closeOverview = () =>{
        setIsClicked(false)
    }

    const [closeDefault, setCloseDefault] = useState(false)
    setTimeout(() => {  
        setCloseDefault(true)
    }, 6000)

    return(
        <>
            <div className='con-temp'>
                <div className="side">
                    <img style={{marginBottom: "30px"}} src="/src/assets/images/file-solid (2).svg" alt="" />
                    {
                        steps.map((step, index) =>(
                            completed[step] ? 
                            <div className='sect com'>
                                <Check size={18}/>
                            </div> : 
                            <div className="sect">
                                <span>{index+ 1}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="above">
                    {
                        steps.map((step, index) =>(
                            completed[step] ? 
                            <div className='step'>
                                <div className='sect com'>
                                    <Check size={18}/>
                                </div>
                                <span style={completed[step] && { backgroundColor: 'green'}}></span>
                            </div> : 
                            <div className='step'>
                                <div className="sect">
                                    <p>{index+ 1}</p>
                                </div>
                                <span></span>
                            </div>
                        ))
                    }
                </div>
                
                <div className="main-temp">
                    <section className="detForm">
                        <Outlet />
                    </section>
                    
                    
                    <div onClick={openOverview} className="photo">
                        {
                     noTemplate == true && closeDefault == false &&
                     <div className='default'>
                            <div className='quote'>Here, we've given you a temporary template</div>
                            <div className='quote-t'></div>
                      </div>
                    }
                        <div className="temp-des">
                            <div className="side-in" style={{backgroundColor: pickTemplate?.style.sideColor}}></div>
                            <div className="main-in">
                                <div className="header-in">
                                    <h6 className='yName'>
                                        <span>{formData.personalDetails.f_name ? formData.personalDetails.f_name.toUpperCase() + "  " : 'JEREMY' + "  "}</span>
                                        <span>{formData.personalDetails.l_name ? formData.personalDetails.l_name.toUpperCase() : 'FISHER'}</span>
                                    </h6>
                                    <p style={{color:pickTemplate?.style.conColor, fontSize: '11px'}}>{formData.experience.title1 ? formData.experience.title1.toUpperCase() : 'KNOWLEDGEABLE SOCIAL MEDIA MANAGER'}</p>
                                </div>
                                <div className="summary">
                                    <div className="left">
                                        <div className="prof">
                                            <h6>PROFESSIONAL SUMMARY</h6>
                                            <p className="top">
                                                {
                                                   formData.summary.professionalSummary ? formData.summary.professionalSummary :
                                                   "Creative social media manager with proven record of success in building brand awareness, increasing followers and patnering with top influencers throughout the country."
                                                }
                                            </p>
                                        </div>
                                        <div className="work">
                                            <h6>WORK HISTORY</h6>
                                            <h6 className='top'>{formData.experience.title1 ? formData.experience.title1 : 'Social Media Manager'}</h6>
                                            <p>
                                                <span>{formData.experience.company ? formData.experience.company + ' ' : 'infasec' + ' '}</span>
                                                <span>
                                                    {formData.experience.start_date ? formData.experience.title1 
                                                    + ' ' + 'since' + ' ' + formData.experience.start_date.slice(0, 4) :
                                                    'social media manager since march 2021'}
                                                </span>
                                            </p>
                                            <p className="top">
                                              {formData.experience.role1 ? '.' + ' ' + formData.experience.role1 : '. Develop marketing content'}
                                            </p>
                                            <p>{formData.experience.role2 ? '.' + ' ' + formData.experience.role2 : '. Analyze reported social media'}</p>
                                            <p>{formData.experience.role3 ? '.' + ' ' + formData.experience.role3 : '. Curate and segment content to increase engagement'}</p>
                                        </div>
                                        <div className="title2">
                                            <h6>
                                                {formData.experience2.job2 ? formData.experience2.job2 : 'Digital Marketing Coordinator'}
                                            </h6>
                                            
                                            <p>
                                                <span>{formData.experience2.company ? formData.experience2.company + ' ' : 'infasec' + ' '}</span>
                                                <span>
                                                    {formData.experience2.end_date ? formData.experience2.job2
                                                    + ' ' + 'from' + ' ' + formData.experience2.start_date.slice(0, 4) + 
                                                    ' ' + 'to' + ' ' + formData.experience2.end_date.slice(0, 4) :
                                                    'social media manager since march 2021'}
                                                </span>
                                            </p>
                                            <p className="top">
                                              {formData.experience2.role1 ? '.' + ' ' + formData.experience2.role1 : '. Develop marketing content'}
                                            </p>
                                            <p>
                                                {formData.experience2.role2 ? '.' + ' ' + formData.experience2.role2 : '. Analyze reported social media'}
                                            </p>
                                            <p>
                                                {formData.experience2.role3 ? '.' + ' ' + formData.experience2.role3 : '. Curate and segment content to increase engagement'}
                                            </p>
                                        </div>
                                        <div className="title2">
                                            
                                            <h6>
                                                {formData.experience3.job3 ? formData.experience3.job3 : 'Social Media Manager'}
                                            </h6>
                                            <p>
                                                <span>{formData.experience3.company ? formData.experience3.company + ' ' : 'infasec' + ' '}</span>
                                                <span>
                                                    {formData.experience3.end_date ? formData.experience3.job3
                                                    + ' ' + 'from' + ' ' + formData.experience3.start_date.slice(0, 4) + 
                                                    ' ' + 'to' + ' ' + formData.experience3.end_date.slice(0, 4) :
                                                    'social media manager since march 2021'}
                                                </span>
                                            </p>
                                            <p className="top">
                                              {formData.experience3.role1 ? '.' + ' ' + formData.experience3.role1 : '. Develop marketing content'}
                                            </p>
                                            <p>
                                                {formData.experience3.role2 ? '.' + ' ' + formData.experience3.role2 : '. Analyze reported social media'}
                                            </p>
                                            <p>
                                                {formData.experience3.role3 ? '.' + ' ' + formData.experience3.role3 : '. Curate and segment content to increase engagement'}
                                            </p>
                                        </div>
                                        
                                    </div>
                                    <div className="right">
                                        <div className="contact" style={{backgroundColor: pickTemplate?.style.conColor}}>
                                            <h6>CONTACT</h6>
                                            <p className='top'>
                                                <Phone size={10} style={{transform: 'rotateY(180deg)'}}/>
                                                {formData.personalDetails.phone ? formData.personalDetails.phone : '080 567 543 12'}
                                            </p>
                                            <p className='non'>
                                                <Mail size={10} style={{minWidth:'10px'}}/>
                                                {formData.personalDetails.email ? formData.personalDetails.email : 'example@gmail.com'}
                                            </p>
                                            <p className='non'>
                                                <MapPinIcon size={10}/>
                                                {formData.personalDetails.address ? formData.personalDetails.address : 'maddison off close'}
                                            </p>
                                        </div>
                                        <div className="skills">
                                            <h6>SKILLS</h6>
                                            {
                                                Object.keys(formData.skills).length !== 0 ?
                                                Object.keys(formData.skills).map((key) =>(
                                                    <p key={key}>. {formData.skills[key]}</p>
                                                ))

                                                :
                                                <div>
                                                <p>. Scheduling </p>
                                                <p>. Scheduling </p>
                                                <p>. Budgeting </p>
                                                <p>. Planning </p>
                                                </div>
                                                
                                            }
            
                                        </div>
                                        <div className="education">
                                            <h6>EDUCATION</h6>
                                            <p className="top">
                                                {
                                                    formData.education.degree ? formData.education.degree : 'Bachelor of arts'
                                                }
                                            </p>
                                            <p>
                                                {
                                                    formData.education.field ? formData.education.field : 'Communications and marketing'
                                                }
                                            </p>
                                            <p>
                                                {
                                                    formData.education.school ? formData.education.school : 'university of wiscondion'
                                                }
                                                <span>{
                                                    formData.education.location ? ',' + ' ' + formData.education.location : ', New jersey'
                                                }</span>
                                            </p>
                                            <p>
                                                Graduated : 
                                                {
                                                    formData.education.grad_date ? ' ' + formData.education.grad_date : ' 2003'
                                                }
                                            </p>
                                        </div>
                                        <div className="certifications">
                                            <h6>CERTIFICATION</h6>
                                            <p className="top">
                                                {
                                                    formData.education.certification ? formData.education.certification : 'Data analytics'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isClicked === true && 
                    <div className='overview'>
                        <div className='removeOv'>
                            <XIcon onClick={closeOverview} size={20}/>
                        </div>
                        <Overview/>
                    </div> 
                }              
            </div>
        </>
    )
}


export default Template1