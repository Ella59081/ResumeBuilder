import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({children}){
    const [formData, setFormData] = useState({
        personalDetails: {},
        experience: {},
        education: {},
        skills: {},
        summary: {}
    })

    const updateForm = (formName, data) =>{
        setFormData(prev =>({
            ...prev, [formName] : {
            ...prev[formName], ...data}
        }))
    }

    return(
        <FormContext.Provider value={{formData, updateForm}}>
            {children}
        </FormContext.Provider>
    )
}
