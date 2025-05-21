import { PDFDownloadLink } from '@react-pdf/renderer'
import { FormContext } from '../contexts/FormContext'
import { useContext } from 'react'


const ResumeDownload = () =>{

    const {formData} = useContext(FormContext)
    
    return(
        <PDFDownloadLink fileName='Resume.pdf' >
            {({ loading }) => (loading ? "Preparing PDF..." : "Download Resume")}
        </PDFDownloadLink>

    //     <PDFDownloadLink document={<ResumePDF formData={formData} />} fileName="Resume.pdf">
    //   {({ loading }) => (loading ? "Preparing PDF..." : "Download Resume")}
    // </PDFDownloadLink>

    )
}