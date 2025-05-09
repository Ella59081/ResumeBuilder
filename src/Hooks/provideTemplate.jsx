import { useContext, createContext, useState } from "react";

export const TemplateContext = createContext();

export const TemplateProvider = ({children}) =>{
    const [template, setTemplate] = useState("template1");


    return(
        <TemplateContext.Provider value={{template, setTemplate}}>
            {children}
        </TemplateContext.Provider>
    )
}


                              