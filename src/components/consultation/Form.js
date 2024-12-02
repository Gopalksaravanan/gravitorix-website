import * as React from 'react';
import FormComponent from "./CommonForm/index";
import { contactForm } from './Configureform/index';

function Form() {
    const handleFormSubmit = (data) => {
        console.log("Form Data:", data);   
    };

    return (
        <div
        className='form-container'
        style={{
          background: "#283FE0",
          padding: "35px",
          borderRadius: "15px",
          color: "#ffffff"
        }}
      >
        <FormComponent
          formControls={contactForm}
          onSubmit={handleFormSubmit}
          buttonText="Register"
        />
      </div>
      
    );
}

export default Form;
