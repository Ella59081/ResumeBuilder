import './template1.css'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormContext } from '../../../../contexts/FormContext'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import InputField from '../../../../components/InputField'
import { detailsSchema } from '../../../../validations/formDataSchema'

function PersonalDetails(){

    const {updateForm, formData} = useContext(FormContext);

    // const [data, setData] = useState({
    //     f_name: "",
    //     l_name: "",
    //     phone: 0,
    //     email: "",
    //     address: "",
    // });

    //Initialize  schema validation
    const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
      resolver: yupResolver(detailsSchema),
    });

    // const watchedValues = watch();

    // useEffect(() =>{
    //     updateForm('personalDetails', watchedValues);
    // },[watchedValues])

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        updateForm('personalDetails', {[name] : value});
        reset()
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        navigate('/resumeData/experience')
    }


    return(
        <>
        <form className="first-part" onSubmit={handleSubmit(onSubmit)}>
                        <div className="header">
                          <h1>Enter your Personal Details</h1>
                          <p>Include your full name and ways for employers to reach you</p>
                        </div>
                        <div className="add-photo">
                            <div className="inimg"></div>
                            <div className="add-text">
                                <p>Add a photo to your resume</p>
                                <label htmlFor="photo" className='photo-add'>
                                    <input type="file" name="photo" disabled id="photo" hidden/>
                                    <span style={{color: "grey"}}>Add photo</span>
                                </label>
                            </div>
                        </div>
                        <div className="form">
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="firstName">
                                        FIRST NAME
                                    </label>
                                    <input type="text" name="f_name"
                                     onChange={handleChange}
                                    //  {...register('f_name',
                                    //     {required: "This field is required"}
                                    //  )}
                                     />
                                    {/* {errors.f_name && <p className='errorMsg'>{errors.f_name?.message}!</p> } */}
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">
                                        LAST NAME
                                    </label>
                                    <input type="text" name="l_name"
                                     onChange={handleChange}
                                    //  {...register('l_name',
                                    //     {required: "This field is required"}
                                    //  )}
                                    />
                                    {/* {errors.l_name ? <p className='errorMsg'>{errors.l_name?.message}!</p> : ""} */}
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="email">
                                        EMAIL
                                    </label>
                                    <input type="email" name="email" id="" 
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="name">
                                    <label htmlFor="phone">
                                        PHONE
                                    </label>
                                    <input type="number" name="phone" id="" 
                                    onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="name">
                                    <label htmlFor="country">
                                        ADDRESS
                                    </label>
                                    <input type="text" name="address"
                                     onChange={handleChange}
                                     />
                                </div>
                                
                            </div>
                            <button style={{marginTop: "50px"}} type="submit" className='continue'>Continue</button>
                            {/* <button  type="submit">submit</button> */}
                            <InputField
                                name='FirstName'
                                control={control}
                                label="FirstName"
                                type='text'
                                error={errors.FirstName?.message}
                                onChange={handleChange}
                                
                            />
                        </div>
        </form>
        </>
    )
}

export default PersonalDetails