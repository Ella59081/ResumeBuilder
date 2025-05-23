import React from "react";
import {
    Page,
    Text,
    View, 
    Document,
    StyleSheet, 
    Font
} from "@react-pdf/renderer";

Font.register({
    family: 'Inter',
    src: '/src/assets/fonts/Inter-VariableFont_opsz,wght.ttf'
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
        fontWeight: '1000',
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
    p: {
        fontSize: 14,
    }
    
})


const ResumePDF = ({formData}) =>{
    
    return(
        <Document>
        <Page size={'A4'} style={styles.page}>
            <View style={styles.sideBar}></View>
            <View style={styles.mainContent}>
                <View style={styles.contentHeading}>
                    <Text style={styles.contentHeader}>
                        <span>{formData.personalDetails.f_name ? formData.personalDetails.f_name + "  " : 'YOUR NAME'}</span>
                        <span>{formData.personalDetails.l_name ? formData.personalDetails.l_name : ''}</span>
                    </Text>
                    <Text style={styles.contentSubHeading}>
                        {formData.experience.title1 ? formData.experience.title1 : ''}
                    </Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.columnLeft}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Summary</Text>
                            <Text>{
                                   formData.summary.professionalSummary ? formData.summary.professionalSummary : ''
                                }
                            </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Work history</Text>
                            <View style={styles.subSection}>
                                <Text style={styles.subHeading}>
                                    {formData.experience.title1 ? formData.experience.title1 : ''}
                                </Text>
                                <Text>
                                    {formData.experience.length !== 0 ? 
                                        formData.experience.company + ' ' + 
                                        formData.experience.title1 + ' ' + 'since'
                                        + ' ' + formData.experience.start_date.slice(0, 4) : ''
                                    }
                                </Text>
                                <View style={styles.section}>
                                    <Text>{formData.experience.role1 ? '.' + ' ' + formData.experience.role1 : ''}</Text>
                                    <Text>{formData.experience.role2 ? '.' + ' ' + formData.experience.role2 : ''}</Text>
                                    <Text>{formData.experience.role3 ? '.' + ' ' + formData.experience.role3 : ''}</Text>
                                </View>

                            </View>
                        </View>
                        {
                            formData.experience2.length !== 0 ? 
                            <View style={styles.subSection}>
                                <Text style={styles.subHeading}>
                                    {
                                        formData.experience2.job2 ? formData.experience2.job2 : ''
                                    }
                                </Text>
                                <Text>
                                    {
                                        formData.experience2.length !== 0 ? formData.experience2.company
                                        + ' ' + formData.experience2.job2 + ' ' + 'from' + ' ' +
                                        formData.experience2.start_date.slice(0, 4) + ' ' + 'to' + ' ' +
                                        formData.experience2.end_date.slice(0, 4) : ' '
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
                            formData.experience3.length !== 0 ? 
                            <View style={styles.subSection}>
                                <Text style={styles.subHeading}>
                                    {
                                        formData.experience3.job3 ? formData.experience3.job3 : ''
                                    }
                                </Text>
                                <Text>
                                    {
                                        formData.experience3.length !== 0 ? formData.experience3.company
                                        + ' ' + formData.experience3.job3 + ' ' + 'from' + ' ' +
                                        formData.experience3.start_date.slice(0, 4) + ' ' + 'to' + ' ' +
                                        formData.experience3.end_date.slice(0, 4) : ' '
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
                        <View style={styles.contact}>
                            <Text style={styles.sectionTitle}>Contact</Text>
                            <View style={styles.subSection}>
                                <Text>
                                    <img src="/src/assets/images/phone-solid.svg" alt="" />
                                    {formData.personalDetails.phone ? formData.personalDetails.phone : ''}
                                </Text>
                                <Text>{formData.personalDetails.email ? formData.personalDetails.email : ''}</Text>
                                <Text>{formData.personalDetails.address ? formData.personalDetails.address : ''}</Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Skills</Text>
                            <View style={styles.subSection}>
                                {
                                    formData.skills!== 0 ?
                                    Object.keys(formData.skills).map((key) =>(
                                    <Text key={key}>. {formData.skills[key]}</Text>
                                    ))

                                    : ''                                               
                                }
                            </View>
                        </View>
                        {
                            formData.education.length !== 0 ? 
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
                                    <span>
                                        {
                                            formData.education.location ? ',' + ' ' + formData.education.location : ', '
                                        }
                                    </span>
                                </Text>
                                <Text>
                                    Graduated : 
                                    {
                                        formData.education.grad_date ? ' ' + formData.education.grad_date : ''
                                    }
                                </Text>
                            </View>
                            </View> : ''
                        }
                        {
                            formData.education.certification.length !== 0 ?
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