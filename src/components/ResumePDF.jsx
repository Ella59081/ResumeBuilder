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
        flexDirection: 'row',
        fontSize: 12,
        fontFamily: 'Verdana'
    },
    sideBar: {
        width: 80,
        backgroundColor: 'blue',
        height: '100%'
    },
    heading: {
        textAlign: 'center',
        paddingTop: 30
    },
    columnLeft: {
        width: '60%',
        padding: 30,
        paddingRight: 0
    },
    columnRight: {
        width: '40%',
        padding: 30,
    },
    section: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    }

    
})


const ResumePDF = ({FormData}) =>{

}

return(
    <Document>
        <Page size={'A4'} style={styles.page}>
            {/* heading */}
            <Text style={styles.heading}>
                Your Name
            </Text>
            
        </Page>
    </Document>
)