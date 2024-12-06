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
        
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center"
      }}
    >
      <FormComponent
        formControls={contactForm}
        onSubmit={handleFormSubmit}
        buttonText="Submit"
      />
    </div>

  );
}

export default Form;
