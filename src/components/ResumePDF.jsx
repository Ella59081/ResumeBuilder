import React from "react";
// import phone from '../../src/assets/images/phone-solid.svg'


import {
    Page,
    Text,
    View, 
    Document,
    StyleSheet, 
    Font,
    Svg,
    Path,
    Image
} from "@react-pdf/renderer";
import { Phone } from "lucide-react";

Font.register({
    family: 'Inter',
    src: '/src/assets/fonts/Montserrat-Medium.ttf'
})

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 12,
        
    },
    sideBar: {
        width: '5%',
        backgroundColor: 'rgb(138, 212, 255)',
        height: '100%'
    },
    mainContent:{
        display:'flex',
        flexDirection: 'column',
        gap: 25,
        padding: 30,
        
        fontFamily: 'Inter'
    },
    contentHeading: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
    },
    contentHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    contentSubHeading: {
        fontSize: 16,
        textTransform: 'uppercase',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        gap: 40,
    },
    columnLeft: {
        width: '60%',
        maxWidth: '60%',
        gap: 30,
        display: 'flex',
        flexDirection: 'column',
        
    },
    columnRight: {
        width: '35%',
        gap: 30,
        display: 'flex',
        flexDirection: 'column',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5
    },
    subSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        
    },
    subHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        backgroundColor: 'rgb(138, 212, 255)',
        padding: 12,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',     
        gap: 3,
        alignItems: 'center'
    },
    p: {
        fontSize: 14,
    },
    images: {
        height: 30,
        width: 30
    }
    
})


const ResumePDF = ({formData ,pickTemplate}) =>{
    const experienceLength = Object.keys(formData.experience).length !== 0
    const experience2Length = Object.keys(formData.experience2).length !== 0
    const experience3Length = Object.keys(formData.experience3).length !== 0
    const skillsLength = Object.keys(formData.skills).length !== 0
    const educationLength = Object.keys(formData.education).length !== 0
    const begin = formData.experience.start_date ? 
    formData.experience.start_date.slice(0, 4) : ''
    const begin2 = formData.experience2.start_date ?
    formData.experience2.start_date.slice(0, 4) : ''
    const end = formData.experience2.end_date ? 
    formData.experience2.end_date.slice(0, 4) : ''
    const begin3 = formData.experience3.start_date ? 
    formData.experience3.start_date.slice(0, 4) : ''
    const end2 = formData.experience3.end_date ? 
    formData.experience3.end_date.slice(0, 4) : ''
    
    const FirstName = formData.personalDetails.f_name ?
    formData.personalDetails.f_name + ' ' : ''
    const LastName = formData.personalDetails.l_name ?
    formData.personalDetails.l_name : ''
    const location = formData.education.location ?
    ', ' + formData.education.location + '.' : ''
    const currentCompany = formData.experience.company ? 
    formData.experience.company : ''
    const lastCompany = formData.experience2.company ?
    formData.experience2.company : ''
    const lastCompany2 = formData.experience3.company ?
    formData.experience3.company : ''

    console.log(experience2Length)

    
    // const certificationLength = formData.education.certification.length
    
    return(
        <Document>
        <Page size={'A4'} style={styles.page}>
            <View style={{backgroundColor: pickTemplate?.style.conColor, width: '5%', height: '100%' }}></View>
            <View style={styles.mainContent}>
                <View style={styles.contentHeading}>
                    <Text style={styles.name}>
                        {FirstName + LastName}
                    </Text>
                    <Text style={{
                        fontSize: 18,
                        textTransform: 'uppercase',
                        color: pickTemplate?.style.conColor
                        }}>
                            {formData.experience.title1 ? formData.experience.title1 : ''}
                    </Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.columnLeft}>
                        {formData.summary.professionalSummary &&
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Professional Summary</Text>
                            <Text>{
                                   formData.summary.professionalSummary ? formData.summary.professionalSummary : ''
                                }
                            </Text>
                        </View>}
                        {experienceLength && <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Work history</Text>
                            <View style={styles.subSection}>
                                <Text style={styles.subHeading}>
                                    {formData.experience.title1 ? formData.experience.title1 : ''}
                                </Text>
                                <Text>
                                    { 
                                        experienceLength ?
                                        currentCompany  + ' ' + 
                                        formData.experience.title1 + ' ' + 'since'
                                        +  ' ' + begin : ''
                                    }
                                </Text>
                                <View style={styles.section}>
                                    <Text>{formData.experience.role1 ? '.' + ' ' + formData.experience.role1 : ''}</Text>
                                    <Text>{formData.experience.role2 ? '.' + ' ' + formData.experience.role2 : ''}</Text>
                                    <Text>{formData.experience.role3 ? '.' + ' ' + formData.experience.role3 : ''}</Text>
                                </View>

                            </View>
                        </View>}
                        {
                            experience2Length ? 
                            <View style={styles.subSection}>
                                <Text style={styles.subHeading}>
                                    {
                                        formData.experience2.job2 ? formData.experience2.job2 : ''
                                    }
                                </Text>
                                <Text>
                                    {
                                        experience2Length ? lastCompany
                                        + ' ' + formData.experience2.job2 + ' ' + 'from' + ' ' +
                                        begin2 + ' ' + 'to' + ' ' + end : ''
                                    }
                                </Text>
                                <View style={styles.section}>
                                    <Text>{formData.experience2.role1 ? '.' + ' ' + formData.experience2.role1 : ''}</Text>
                                    <Text>{formData.experience2.role2 ? '.' + ' ' + formData.experience2.role2 : ''}</Text>
                                    <Text>{formData.experience2.role3 ? '.' + ' ' + formData.experience2.role3 : ''}</Text>
                                </View>
                            </View> : ''
                        }
                        {
                            experience3Length ? 
                            <View style={styles.subSection}>
                                <Text style={styles.subHeading}>
                                    {
                                        formData.experience3.job3 ? formData.experience3.job3 : ''
                                    }
                                </Text>
                                <Text>
                                    {
                                        experience3Length ? lastCompany2
                                        + ' ' + formData.experience3.job3 + ' ' + 'from' + ' ' +
                                        begin3 + ' ' + 'to' + ' ' +
                                        end2 : ''
                                    }
                                </Text>
                                <View style={styles.section}>
                                    <Text>{formData.experience3.role1 ? '.' + ' ' + formData.experience3.role1 : ''}</Text>
                                    <Text>{formData.experience3.role2 ? '.' + ' ' + formData.experience3.role2 : ''}</Text>
                                    <Text>{formData.experience3.role3 ? '.' + ' ' + formData.experience3.role3 : ''}</Text>
                                </View>
                            </View> : ''
                        }
                        
                    </View>
                    <View style={styles.columnRight}>
                        {formData.personalDetails.phone || formData.personalDetails.email
                            || formData.personalDetails.email ?
                        <View style={{ 
                                backgroundColor: pickTemplate?.style.conColor, 
                                display: 'flex',flexDirection: 'column', gap: 5,
                                padding: 12
                            }}>
                            <Text style={styles.sectionTitle}>Contact</Text>
                            <View style={styles.subSection}>
                                
                                { formData.personalDetails.phone &&
                                <View style={styles.info}>
                                    
                                    {/* <Image style={styles.images} src={phone} />
                                    <Svg xmlns="http://www.w3.org/2000/svg" fill="blue" color="red" style={{fill: 'green', height: 12, width: 12}} 
                                    viewBox="0 0 512 512"><Path 
                                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 51
                                    2 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11
                                    .6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                                    </Svg> */}
                                    <Text>{formData.personalDetails.phone ? formData.personalDetails.phone : ''}</Text>
                                </View>}
                                { formData.personalDetails.address &&
                                <View style={styles.info}>
                                    {/* <Svg xmlns="http://www.w3.org/2000/svg" fill="blue" color="red" style={{fill: 'green', height: 12, width: 12}} 
                                    viewBox="0 0 512 512"><Path 
                                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 51
                                    2 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11
                                    .6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                                    </Svg> */}
                                    <Text>{formData.personalDetails.address ? formData.personalDetails.address : ''}</Text>
                                </View>}
                                { formData.personalDetails.email &&
                                <View style={styles.info}>
                                    {/* <Svg xmlns="http://www.w3.org/2000/svg" fill="blue" color="red" style={{fill: 'green', height: 12, width: 12}} 
                                    viewBox="0 0 512 512"><Path 
                                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 51
                                    2 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11
                                    .6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                                    </Svg> */}
                                    <Text>{formData.personalDetails.email ? formData.personalDetails.email : ''}</Text>
                                </View>}
                            </View>
                        </View> : ''}
                        {skillsLength && <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Skills</Text>                                <Text>{formData.personalDetails.email ? formData.personalDetails.email : ''}</Text>

                            <View style={styles.subSection}>
                                {
                                    skillsLength ?
                                    Object.keys(formData.skills).map((key) =>(
                                    <Text key={key}>. {formData.skills[key]}</Text>
                                    ))

                                    : ''                                               
                                }
                            </View> 
                        </View>}
                        {
                            educationLength ? 
                            <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Education</Text>
                            <View style={styles.subSection}>
                                <Text>
                                    {
                                        formData.education.degree ? formData.education.degree : ''
                                    }
                                </Text>
                                <Text>
                                    {
                                        formData.education.field ? formData.education.field : ''
                                    }
                                </Text>
                                <Text>
                                    {
                                        formData.education.school ? formData.education.school : ''
                                    }
                                    <Text>
                                        {
                                            formData.education.location ?   location : ''
                                        }
                                    </Text>
                                </Text>
                                <Text>
                                     
                                    {
                                        formData.education.grad_date ? 'Graduated :' + ' ' + formData.education.grad_date : ''
                                    }
                                </Text>
                            </View>
                            </View> : ''
                        }
                        {
                            formData.education.certification ?
                            <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                Certification
                            </Text>
                            <View style={styles.section}>
                                <Text>
                                    {
                                        
                                        formData.education.certification ? formData.education.certification : ''
                                    }
                                </Text>
                            </View>
                            </View>  : 
                            ''
                        }
                    </View>
                </View>
            </View>
        </Page>
       </Document>
    )
}


export default ResumePDF