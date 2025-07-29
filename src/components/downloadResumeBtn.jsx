import { PDFDownloadLink } from '@react-pdf/renderer'
import { FormContext } from '../contexts/FormContext'
import { useContext, useState } from 'react'
import { useTemplate } from '../contexts/provideTemplate'
import ResumePDF from './ResumePDF'
import { Download } from 'lucide-react'
import { Loader } from 'lucide-react'

const ResumeDownload = () =>{

    const {formData} = useContext(FormContext)
    const {pickTemplate} = useTemplate()
    const [loading, setLoading] = useState(false)

    const download = () =>{
        setLoading(true)
        setTimeout(() => {  
            setLoading(false)
        }, 5000)
    }
    
    return(
        <button className='download'
            onClick={download}
            disabled={loading}
        >
            
            { !loading ?
            <PDFDownloadLink className='downLink' 
                document={<ResumePDF formData={formData}  
                pickTemplate={pickTemplate}/>} fileName='Resume.pdf'
                disabled={loading}
            >
                {/* {({ loading }) => (loading ? "Downloading" : "Download Resume")} */}
                <Download size={18} />
                Download resume
            </PDFDownloadLink> :
            <button className='downLink' disabled={loading}>
                <Loader size={18} />
                downloading
            </button>
            }
            
        </button>

    )
}



export default ResumeDownload