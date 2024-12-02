import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().matches(/^[A-Za-z\s]+$/, "Name must only contain letters").required("Name is required"), 
  email: yup.string().email("Invalid email format").required("Email is required"),
  companyname: yup.string().required("Company name is required"),
  phoneno: yup
    .string() 
    .matches(/^\d{10}$/, "Phone number must contain exactly 10 digits")  
    .required("Phone number is required"),
  projectdetail: yup.string().required("Brief about the project is required")
});
