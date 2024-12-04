import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography, StepConnector } from '@mui/material';
import { styled } from '@mui/material/styles';
import Form from './Form';
import BackgroundImage from '../../assets/rb.svg'
 
 

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    borderColor: 'blue',
    borderWidth: 2,
  },
}));

const styles = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width:"100%",
  height:"auto",
  marginTop:15,
  marginBottom:15
};
 

function CustomStepIcon(props) {
  const { className } = props;

  return (
    <div
      className={className}
      style={{
        width: 24,
        height: 24,
        borderRadius: '50%',
        backgroundColor: 'blue',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
      }}
    >
      {props.icon}
    </div>
  );
}

export default function Consult() {
  const steps = [
    {
      label: "Fill up your details",
      description: "Get custom solutions, Recommendations, Estimates.",
    },
    {
      label: "What's next?",
      description: "One of our Account managers will contact you shortly.",
    },
  ];

  return (
    <>
    <div className='form-container' style={styles}>
      <div className='form-section' >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
       
            }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'blue',
            fontSize: { xs: '1.5rem', md: '2rem' },
            mb: 2,
            textAlign:"center",
            marginTop:"30px",
            fontWeight:"bold"
          }}
        >
          Book Free Consultation
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
            lineHeight: 1.6,
          }}
        >
          Get a 30-minute free consultation from a field expert.
          Validate your idea for free and<br />get a rough quote once you complete this form.
        </Typography>
      </Box>

      <Box
        className="stepper-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          mt:4
        }}
      >
        <Stepper
          orientation="vertical"
          connector={<CustomConnector />}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={CustomStepIcon}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: 'black' }}>
                  {step.label}
                </Typography>
              </StepLabel>
              <Typography sx={{ fontSize: '14px', ml: 4, mt: -1, color: 'black' }}>
                {step.description}
              </Typography>
            </Step>
          ))}
        </Stepper>

      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
          mt:5
        }}
      >
        <Form />
      </Box>
      </div>
      </div>
    </>
  );
}
