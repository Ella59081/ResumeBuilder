import React from "react";
import {
    Page,
    Text,
    View, 
    Document,
    StyleSheet 
} from "@react-pdf/renderer";

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
        padding: 30
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
    contentSubHeading: {
        fontSize: 16,
        textTransform: 'uppercase',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        gap: 35
    },
    columnLeft: {
        width: '60%',
        gap: 30,
        display: 'flex',
        flexDirection: 'column',
    },
    columnRight: {
        width: '40%',
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
        padding: 20,
    },
    p: {
        fontSize: 14,
    }
    
})


const ResumePDF = ({formData}) =>{
    
    return(
        <Document>
        <Page size={'A4'} style={styles.page}>
            {/* heading */}
            <View style={styles.sideBar}></View>
            <View style={styles.mainContent}>
                <View style={styles.contentHeading}>
                    <Text style={styles.contentHeader}>Jeremy fisher</Text>
                    <Text style={styles.contentSubHeading}>Marketing strategies</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.columnLeft}>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Summary</Text>
                            <Text>ygdyjsyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadgvsh
                                dbsnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnmbjsjds
                                jdhssssssssssssvmbbbbbbsdcghvdghcvhdfchydgvvsghcdh
                                sdjgscftfdddddddddddddddddddddddddddddddddddddddc
                            </Text>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Work history</Text>
                            <View style={styles.subSection}>
                                <Text style={styles.subHeading}>Socials media manager</Text>
                                <Text>Social media from this to this</Text>
                                <View style={styles.section}>
                                    <Text>. Managed roles and kept everything up to date</Text>
                                    <Text>. did the same thing over and over again</Text>
                                    <Text>. resist the urge to take a nap whiles cooking</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.subSection}>
                                <Text style={styles.subHeading}>Social media from this to this</Text>
                                <View style={styles.section}>
                                    <Text>. Managed roles and kept everything up to date</Text>
                                    <Text>. did the same thing over and over again</Text>
                                    <Text>. resist the urge to take a nap whiles cooking</Text>
                                </View>
                        </View>

                    </View>
                    <View style={styles.columnRight}>
                        <View style={styles.contact}>
                            <Text style={styles.sectionTitle}>Contact</Text>
                            <View style={styles.subSection}>
                                <Text>090765433678</Text>
                                <Text>lesly"gmail.com</Text>
                                <Text>no2 off owhoda street</Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Skills</Text>
                            <View style={styles.subSection}>
                                <Text>. Reading many pages at a time</Text>
                                <Text>. Reading many pages at a time</Text>
                                <Text>. Reading many pages at a time</Text>
                                <Text>. Reading many pages at a time</Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Education</Text>
                            <View style={styles.subSection}>
                                <Text>Bachelor of arts</Text>
                                <Text>Communications</Text>
                                <Text>University of ibadon</Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                <View style={subSection}>
                                    <Text>Advanced diploma</Text>
                                </View>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>
       </Document>
    )
}


export default ResumePDF