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
        backgroundColor: 'rgb(138, 212, 255)'
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
                                <Text style={styles.contentSubHeading}>Socials media manager</Text>
                                <Text>Social media from this to this</Text>
                                <View style={styles.subSection}>
                                    <Text>. Managed roles and kept everything up to date</Text>
                                    <Text>. did the same thing over and over again</Text>
                                    <Text>. resist the urge to take a nap whiles cooking</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.subSection}>
                                <Text style={styles.contentSubHeading}>Social media from this to this</Text>
                                <View style={styles.subSection}>
                                    <Text>. Managed roles and kept everything up to date</Text>
                                    <Text>. did the same thing over and over again</Text>
                                    <Text>. resist the urge to take a nap whiles cooking</Text>
                                </View>
                        </View>
                    </View>
                    <View style={styles.columnRight}>
                        <Text>ready to do my absolute best to do whatever i can do to help my friends</Text>
                    </View>
                </View>
            </View>
        </Page>
       </Document>
    )
}


export default ResumePDF