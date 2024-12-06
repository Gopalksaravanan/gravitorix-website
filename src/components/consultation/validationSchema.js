import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required("Name is required").matches(/^[A-Za-z\s]+$/, "Name must only contain letters"), 
  email: yup.string().email("Invalid email format").required("Email is required"),
  companyname: yup.string().required("Company name is required"),
  phoneno: yup.string().required("Phone number is required").matches(/^\d+$/, "Phone number must contain only numbers").matches(/^\d{10}$/, "Phone number must contain exactly 10 digits"),  
  projectdetail: yup.string().required("Brief about the project is required")
});
