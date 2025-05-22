import { PDFDownloadLink } from '@react-pdf/renderer'
import { FormContext } from '../contexts/FormContext'
import { useContext } from 'react'
import ResumePDF from './ResumePDF'


const ResumeDownload = () =>{

    const {formData} = useContext(FormContext)
    
    return(
        <PDFDownloadLink className='download' document={<ResumePDF formData={formData}/>} fileName='Resume.pdf'  >
            {/* <img src="/src/assets/images/file-arrow-down-solid.svg" alt="" />
            Download */}
            {({ loading }) => (loading ? "Downloading" : "Download Resume")}
        </PDFDownloadLink>
    //     <PDFDownloadLink document={<ResumePDF formData={formData} />} fileName="Resume.pdf">
    //   {({ loading }) => (loading ? "Preparing PDF..." : "Download Resume")}
    // </PDFDownloadLink>

    )
}

export default ResumeDownload