import { Controller } from "react-hook-form";
import '../Pages/Templates/templatePage/template1/template1.css'
import { useState } from "react";

const InputField  = ({
    name, label, error, control, value, onChange, type, register
}) =>{
    return(
        <div className="name">
            <label htmlFor="firstName">
                {label}
            </label>
            <Controller
            name={name}
            control={control}
            render={({field}) =>(
                <input 
                {...field}
                type={type}
                register={register} 
                name={name}
                value={value}
                // onChange={onChange}
                onChange={onChange}
                />
            )}

            />
            {error && <p className='errorMsg' style={{color: "red"}}>{error}</p>}

        </div>
    )
}

export default InputField