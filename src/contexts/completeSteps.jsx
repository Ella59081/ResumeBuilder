import { useContext, createContext, useState } from "react";

const StepsContext = createContext()

export const StepsProvider = ({children})=>{
    const [completed, setCompleted] = useState({});

    const steps = ['step1', 'step2', 'step3', 'step4', 'step5'];

    return(
        <StepsContext.Provider value={{completed, setCompleted, steps}}>
            {children}
        </StepsContext.Provider>
    )
}

export const useSteps = () => useContext(StepsContext);
