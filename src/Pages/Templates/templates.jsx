import './template.css'
import { Link } from 'react-router-dom'
function Templates(){
    return(
        <>
         <div className="con">
            <div className="main">
                <div className="header">
                    <h1>Choose your desired template</h1>
                    <a className='later' href="">Choose template later</a>
                </div>

                <div className="template-grid">
                    <Link to="/resumeData" className="template" id="temp-1">
                        <img src="/src/assets/images/template(1).svg" alt="" />
                        <a className='use' href="">Use this template</a>
                    </Link>
                    <div className="template" id="temp-2">
                        <img src="/src/assets/images/template(2).svg" alt="" />
                        <a className='use' href="">Use this template</a>
                    </div>
                    <div className="template" id="temp-3">
                        <img src="/src/assets/images/template(3).svg" alt="" />
                        <a className='use' href="">Use this template</a>
                    </div>
                    <div className="template" id="temp-4">
                        <img src="/src/assets/images/template(4).svg" alt="" />
                        <a className='use' href="">Use this template</a>
                    </div>
                    <div className="template" id="temp-5">
                        <img src="/src/assets/images/resume-Template (1).avif" alt="" />
                        <a className='use' href="">Use this template</a>
                    </div>
                    <div className="template" id="temp-6">
                        <img src="/src/assets/images/template(1).svg" alt="" />
                        <a className='use' href="">Use this template</a>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Templates