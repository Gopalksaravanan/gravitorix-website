import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../CommonInput/index";
import { schema } from "../validationSchema";
import Button from "@mui/joy/Button";

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
        const error = errors[formElement.name];
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
                        error={error}
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
                        error={error}
                    />
                );
                break;
            default:
                content = null;
        }

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <div style={{ flex: 1 }}>{content}</div>
                {error && (
                    <div
                        style={{
                            color: "red",
                            width: "100%",
                            maxWidth: "500px",
                            minWidth: "500px",
                            textAlign: "left",
                            marginLeft: "20px",
                        }}
                    >
                        <h4>*{error.message}</h4>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                position: "relative",
            }}
        >
            <div
                style={{
                    background: "#283FE0",
                    borderRadius: "15px",
                    color: "#ffffff",
                    width: "500px",
                    padding: "66px 24px 65px",
                    height: "100%",
                    maxHeight: "551px",
                    display: "flex",
                    flexDirection: "column",
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
                    <div
                        style={{
                            marginTop: "46px",
                            marginBottom: "-39px",
                            marginLeft: "75px",
                        }}
                    >
                        <Button
                            size="md"
                            variant="solid"
                            type="submit"
                            style={{ background: "black" }}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormComponent;
