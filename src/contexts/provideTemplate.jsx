import { useContext, createContext, useState } from "react";
export const TemplateContext = createContext();
import { styles } from "./templateStyles";

export const TemplateProvider = ({children}) =>{
    const [pickTemplate, setPickTemplate] = useState(null);
    const templates = [
        {
            name: 'template1',
            style: styles.template1
        },
        {
            name: 'template2',
            style: styles.template2
        },
        {
            name: 'template3',
            style: styles.template3
        },
        {
            name: 'template4',
            style: styles.template4
        },
        {
            name: 'template5',
            style: styles.template5
        },
        {
            name: 'template6',
            style: styles.template6
        }
    ]

    const [noTemplate, setNoTemplate] = useState(false);
    // if(noTemplate){
    //     setPickTemplate(templates[0])
    // }

    console.log(noTemplate)

    localStorage.setItem('template', JSON.stringify(pickTemplate, noTemplate, setNoTemplate))
    

    return(
        <TemplateContext.Provider value={{pickTemplate, setPickTemplate, templates, noTemplate, setNoTemplate}}>
            {children}
        </TemplateContext.Provider>
    )
}

export const useTemplate = () => useContext(TemplateContext)


                              