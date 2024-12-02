import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from '../CommonInput/index';
import { schema } from "../validationSchema"; 
import Button from '@mui/joy/Button';

const formTypes = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
};

function FormComponent({ formControls = [], onSubmit, buttonText }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",  
    });

    const renderFormElement = (formElement) => {
        let content = null;

        switch (formElement?.componentType) {
            case formTypes.INPUT:
                content = (
                    <FormInput
                        label={formElement.label}
                        id={formElement.id}
                        type={formElement.type}
                        name={formElement.name}
                        register={register}   
                        error={errors[formElement.name]}   
                    />
                );
                break;
            case formTypes.TEXTAREA:
                content = (
                    <FormInput
                        label={formElement.label}
                        id={formElement.id}
                        name={formElement.name}
                        componentType={formTypes.TEXTAREA} 
                        register={register}    
                        error={errors[formElement.name]}  
                    />
                );
                break;
            default:
                content = null;
        }

        return content;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formControls.map((formElement, index) => (
                <div key={index} className="form-control">
                    {renderFormElement(formElement)}
                    {errors[formElement.name] && (
                        <p className="error-message">{errors[formElement.name]?.message}</p>
                    )}
                </div>
            ))}
            <Button size="md" variant="solid" type="submit" style={{background:"black"}}>
         {buttonText}
        </Button>
        </form>
    );
}

export default FormComponent;
