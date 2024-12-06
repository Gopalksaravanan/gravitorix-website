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
        <>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', position: 'relative' }}>
    <div
        style={{
            background: "#283FE0",
            borderRadius: "15px",
            color: "#ffffff",
            width: "500px",
            padding: "66px 24px 65px",
            height: "100%",
            maxHeight: "551px",
            display: 'flex',
            flexDirection: 'column'  
        }}
    >
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%", maxWidth: "400px" }}
        >
            {formControls.map((formElement, index) => (
                <div
                    key={index}
                    className="form-control"
                    style={{ marginBottom: "20px" }}
                >
                    {renderFormElement(formElement)}
                </div>
            ))}
            <div style={{ marginTop: "46px", marginBottom: "-39px" , marginLeft:"75px"}}>
                <Button size="md" variant="solid" type="submit" style={{ background: "black" }}>
                    {buttonText}
                </Button>
            </div>
        </form>
    </div>

 
    <div
        style={{
            position: "absolute",
            top: 0,   
            right: "100%",  
            width: "100%",  
            minHeight: "200px",
            padding: "10px",
            color: "red",
            fontSize: "14px",
            wordBreak: "break-word",
            borderRadius: "10px",
            zIndex: 1,
            textAlign:'left'   
        }}
    >
        {Object.entries(errors).map(([fieldName, error]) => (
            <p key={fieldName} style={{ width: "100%", fontSize: 18 }}>
                *{error?.message}
            </p>
        ))}
    </div>
</div>


        </>
    );
}

export default FormComponent;
