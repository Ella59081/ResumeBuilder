import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export function FormProvider({children}){
    const [formData, setFormData] = useState({
        personalDetails: {},
        experience: {},
        education: {},
        skills: {},
        summary: {}
    })

    // const [formData, setFormData] = useState(() =>{
    //     const savedData = localStorage.getItem('formData');
    //     return savedData ? JSON.parse(savedData) :
    //     {
    //         personalDetails: {},
    //         experience: {},
    //         education: {},
    //         skills: {},
    //         summary: {}
    //     }
    // })

    useEffect(() =>{
        localStorage.setItem("formData", JSON.stringify(formData))
    },[formData])

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
