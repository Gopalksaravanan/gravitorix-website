import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

const FormInput = ({ label, type, name, register, id, componentType, error }) => {
  return (
    <FormControl>
      <div
        className="form-control"
        style={{
          color: "white"
        }}
      >
        <Box
          component="div"
          sx={{ '& > :not(style)': { m: 1 } }}
        >
          {componentType === "textarea" ? (
            <div>

              <FormLabel
                htmlFor={id}
                style={{
                  color: "white",
                }}
              >
                {label} <span>*</span>
              </FormLabel>
              <Textarea
                id={id}
                name={name}
                minRows={2}
                maxRows={4}
                {...register(name)}
                variant="solid"
                sx={{
                  color: "white",
                  border: "none",
                  borderBottom: "2px solid white",
                  borderRadius: 0,
                  outline: "none",
                  boxShadow: "none",
                  position: "relative",
                  backgroundColor: "inherit",
                  width: "51ch",
                  left:0,
                  '&:hover': {
                    borderBottom: "2px solid white",
                  },
                  '&:focus': {
                     borderBottom: "2px solid white",
                    outline: "none",
                   },
                  '&:active': {
                    borderBottom: "2px solid white",
                    outline: "none",
                  },
                  '&:focus-visible': {
                    borderBottom: "2px solid white",
                    outline: "none",
                  },
                  '&::placeholder': {
                    color: "white",
                  },
                  '&::before': {
                    boxShadow: "none",
                  },
                  
                }}
              />



            </div>
          ) : (
            <div>

              <FormLabel
                htmlFor={id}
                style={{
                  color: "white",
                }}
              >
                {label} <span>*</span>
              </FormLabel>
              <TextField
                id={id}
                variant="standard"
                sx={{
                  width: "55ch",
                  input: {
                    color: "white",
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: "white",
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottomColor: "white",
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: "white",
                  },
                }}
                name={name}
                type={type}
                {...register(name)}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </div>
          )}
        </Box>
      </div>
    </FormControl>
  );
};

export default FormInput;
