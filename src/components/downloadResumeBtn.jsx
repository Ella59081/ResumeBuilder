import { PDFDownloadLink } from '@react-pdf/renderer'
import { FormContext } from '../contexts/FormContext'
import { useContext } from 'react'
import { useTemplate } from '../contexts/provideTemplate'

import ResumePDF from './ResumePDF'


const ResumeDownload = () =>{

    const {formData} = useContext(FormContext)
    const {pickTemplate} = useTemplate()
    
    return(
        <PDFDownloadLink className='download' document={<ResumePDF formData={formData}  pickTemplate={pickTemplate}/>} fileName='Resume.pdf'  >
            {/* <img src="/src/assets/images/file-arrow-down-solid.svg" alt="" />
            Download */}
            {({ loading }) => (loading ? "Downloading" : "Download Resume")}
        </PDFDownloadLink>

    )
}

export default ResumeDownload