import './template.css'
import { Link } from 'react-router-dom'
import { useTemplate } from '../../contexts/provideTemplate'
function Templates(){

    const {templates, setPickTemplate, setNoTemplate} = useTemplate()
    // console.log(templates[0].template1.image)
    return(
        
        <>
         <div className="con">
            <div className="main">
                <div className="header">
                    <h1>Choose your desired template</h1>
                    <Link onClick={ ()=> {
                        setPickTemplate(templates[0])
                        setNoTemplate(true)
                    }}
                        to="/resumeData" className='later'>
                        Choose template later
                    </Link>
                </div>

                <div className="template-grid">
                    {
                        templates.map((template, index) =>(
                            <Link to="/resumeData" 
                              className="template" 
                              key={index} onClick={()=> {
                                setPickTemplate(template)
                                setNoTemplate(false)
                              }}>
                                <img src={template.style.image} alt=""/>
                            </Link>
                        ))
                    }                    
                </div>
            </div>
         </div>
        </>
    )
}

export default Templates