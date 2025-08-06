import './review.css'
import { Link } from 'react-router-dom'
import ResumeDownload from '../../components/downloadResumeBtn'
import { useContext, useState } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react'
import { MapPinIcon } from 'lucide-react'
import { useTemplate } from '../../contexts/provideTemplate'
import Header from '../../components/Header/header.jsx'
import { Pen } from 'lucide-react'
import { Pencil } from 'lucide-react'



function Review(){

    const {formData} = useContext(FormContext);
    const experienceLength = Object.keys(formData.experience).length !== 0
    const experience2Length = Object.keys(formData.experience2).length !== 0
    const experience3Length = Object.keys(formData.experience3).length !== 0
    const skillsLength = Object.keys(formData.skills).length !== 0
    const educationLength = Object.keys(formData.education).length !== 0

    const {templates, setPickTemplate, pickTemplate} = useTemplate()

    return(
        <>
            <Header/>
            <div className="rev-con">
                <div className="revphoto">
                        <div className="revtemp-des">
                            <div className="revside-in" style={{backgroundColor: pickTemplate?.style.sideColor}}></div>
                            <div className="revmain-in" >
                                <div className="revheader-in" >
                                    <Link to='/resumeData' className="edit">
                                        <Pencil size={18} color='black'/>
                                    </Link>
                                    <h6 className='yName'>
                                        <span>{formData.personalDetails.f_name ? formData.personalDetails.f_name.toUpperCase() + "  " : 'YOUR '}</span>
                                        <span>{formData.personalDetails.l_name ? formData.personalDetails.l_name.toUpperCase() : 'NAME'}</span>
                                    </h6>
                                    <p style={{color:pickTemplate?.style.conColor, fontSize: '17px'}}>{formData.experience.title1 ? formData.experience.title1.toUpperCase() : ''}</p>
                                </div>
                                <div className="revsummary">
                                    <div className="revleft">
                                        { Object.keys(formData.summary).length !== 0 && <div className="revprof">
                                            <Link to='/resumeData/summary' className="edit">
                                                <Pencil size={18} color='black'/>
                                            </Link>
                                            <h6>PROFESSIONAL SUMMARY</h6>
                                            <p  className='top'>
                                                {
                                                  formData.summary.professionalSummary ? formData.summary.professionalSummary :
                                                   ""
                                                }
                                            </p>
                                        </div>}
                                        { experienceLength && <div className="revwork">
                                            <Link to='/resumeData/experience' className="edit">
                                                <Pencil size={18} color='black'/>
                                            </Link>
                                            <h6>WORK HISTORY</h6>
                                            <h6 className='top'>{formData.experience.title1 ? formData.experience.title1 : ''}</h6>
                                            <p>
                                                <span>{formData.experience.company ? formData.experience.company + ' ' : ''}</span>
                                                <span>
                                                    {formData.experience.start_date ? formData.experience.title1 
                                                    + ' ' + 'since' + ' ' + formData.experience.start_date.slice(0, 4) :
                                                    ''}
                                                </span>
                                            </p>
                                            <p className='top'>
                                              {formData.experience.role1 ? '.' + ' ' + formData.experience.role1 : ''}
                                            </p>
                                            <p>{formData.experience.role2 ? '.' + ' ' + formData.experience.role2 : ''}</p>
                                            <p>{formData.experience.role3 ? '.' + ' ' + formData.experience.role3 : ''}</p>
                                        </div>}
                                        {
                                            experience2Length ?
                                        <div className="revtitle2">
                                            <Link to='/resumeData/experience' className="edit">
                                                <Pencil size={18} color='black'/>
                                            </Link>
                                            <h6>
                                                {formData.experience2.job2 ? formData.experience2.job2 : ''}
                                            </h6>
                                            
                                            <p>
                                                <span>{formData.experience2.company ? formData.experience2.company + ' ' : ''}</span>
                                                <span>
                                                    {formData.experience2.end_date ? formData.experience2.job2
                                                    + ' ' + 'from' + ' ' + formData.experience2.start_date.slice(0, 4) + 
                                                    ' ' + 'to' + ' ' + formData.experience2.end_date.slice(0, 4) :
                                                    ''}
                                                </span>
                                            </p>
                                            <p className="top">
                                              {formData.experience2.role1 ? '.' + ' ' + formData.experience2.role1 : ''}
                                            </p>
                                            <p>
                                                {formData.experience2.role2 ? '.' + ' ' + formData.experience2.role2 : ''}
                                            </p>
                                            <p>
                                                {formData.experience2.role3 ? '.' + ' ' + formData.experience2.role3 : ''}
                                            </p>
                                        </div>
                                        : ''
                                        }
                                        {
                                            experience3Length ?
                                        <div className="revtitle2">
                                            <Link to='/resumeData/experience' className="edit">
                                                <Pencil size={18} color='black'/>
                                            </Link>
                                            
                                            <h6>
                                                {formData.experience3.job3 ? formData.experience3.job3 : ''}
                                            </h6>
                                            <p>
                                                <span>{formData.experience3.company ? formData.experience3.company + ' ' : ''}</span>
                                                <span>
                                                    {formData.experience3.end_date ? formData.experience3.job3
                                                    + ' ' + 'from' + ' ' + formData.experience3.start_date.slice(0, 4) + 
                                                    ' ' + 'to' + ' ' + formData.experience3.end_date.slice(0, 4) :
                                                    ''}
                                                </span>
                                            </p>
                                            <p className="top">
                                              {formData.experience3.role1 ? '.' + ' ' + formData.experience3.role1 : ''}
                                            </p>
                                            <p>
                                                {formData.experience3.role2 ? '.' + ' ' + formData.experience3.role2 : ''}
                                            </p>
                                            <p>
                                                {formData.experience3.role3 ? '.' + ' ' + formData.experience3.role3 : ''}
                                            </p>
                                        </div>
                                           : ''
                                        }
                                    </div>
                                    <div className="revright">
                                        { formData.personalDetails.phone || formData.personalDetails.email
                                          || formData.personalDetails.email ?
                                        <div className="revcontact" style={{backgroundColor: pickTemplate?.style.conColor}}>
                                            <Link to='/resumeData' className="edit closer">
                                                <Pencil size={18} color='black'/>
                                            </Link>
                                            <h6>CONTACT </h6>
                                            {
                                                formData.personalDetails.phone ? 
                                                <p className='top'>
                                                  <Phone className='c-info' size={18} style={{transform: 'rotateY(180deg)'}}/>
                                                  <p>{formData.personalDetails.phone}</p>
                                                </p> : <p></p>
                                            }
                                            {
                                                formData.personalDetails.email ? 
                                                <p className='top'>
                                                  <Mail className='c-info' size={18} style={{minWidth:'18px'}}/>
                                                  <p>{formData.personalDetails.email}</p>
                                                </p> : <p></p>
                                            }
                                            {
                                                formData.personalDetails.address ? 
                                                <p className='top'>
                                                  <MapPinIcon className='c-info' size={18}/>
                                                  <p>{formData.personalDetails.address}</p>
                                                </p> : 
                                                <p></p>
                                            }
                                            
                                        </div>: ''}
                                        {
                                            skillsLength ? 
                                        <div className="revskills">
                                            <Link to='/resumeData/skills' className="edit">
                                                <Pencil size={18} color='black'/>
                                            </Link>
                                            <h6>SKILLS</h6>
                                            {
                                                formData.skills.skill1 ?
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
                                            : '' 
                                        }
                                        {
                                            educationLength ?
                                        <div className="reveducation">
                                            <Link to='/resumeData/education' className="edit">
                                                <Pencil size={18} color='black'/>
                                            </Link>
                                            <h6>EDUCATION</h6>
                                            <p className="top">
                                                {
                                                    formData.education.degree ? formData.education.degree : ''
                                                }
                                            </p>
                                            <p>
                                                {
                                                    formData.education.field ? formData.education.field : ''
                                                }
                                            </p>
                                            <p>
                                                {
                                                    formData.education.school ? formData.education.school : ''
                                                }
                                                <span>{
                                                    formData.education.location ? ',' + ' ' + formData.education.location : ', '
                                                }</span>
                                            </p>
                                            <p>
                                                 
                                                {
                                                    formData.education.grad_date ? 'Graduated :' + ' ' + formData.education.grad_date : ' '
                                                }
                                            </p>
                                        </div> : ''
                                        }
                                        {
                                            formData.education.certification ?
                                        <div className="rcertifications">
                                            <Link to='/resumeData/education' className="edit closer">
                                                <Pencil size={18} color='black'/>
                                            </Link>
                                            <h6>CERTIFICATION</h6>
                                            <p>{formData.education.certification}</p>
                                        </div>
                                           : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="preview">
                    <div className="rev-buttons">
                        
                        <ResumeDownload/>
                    </div>
                    <div className="temp-rev">
                        <h4>Preview templates</h4>
                        
                        <div className="temps-grid">
                            {
                                templates.map((template, index) =>(
                                    <div 
                                        className="template" 
                                        key={index} onClick={ () => setPickTemplate(template)}>
                                        <img src={template.style.image} alt=""/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review