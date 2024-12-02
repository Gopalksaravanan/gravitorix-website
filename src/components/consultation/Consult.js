import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Stepper from '@mui/joy/Stepper';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import { Typography as JoyTypography } from '@mui/joy';
import { StepConnector } from '@mui/material';
import Form from './Form';

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

      <div
        className="stepper-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Stepper
          orientation="vertical"
          connector={<StepConnector />}
          sx={(theme) => ({
            '--Stepper-verticalGap': '-2.5rem',
            '--StepIndicator-size': '2.5rem',
            '--Step-gap': '1rem',
            '--Step-connectorInset': '0.5rem',
            '--Step-connectorRadius': '1rem',
            '--Step-connectorThickness': '4px',
            '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
            [`& .${stepClasses.completed}`]: {
              '&::after': { bgcolor: 'success.solidBg' },
            },
            [`& .${stepClasses.active}`]: {
              [`& .${stepIndicatorClasses.root}`]: {
                border: '4px solid',
                borderColor: '#fff',
                boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
              },
            },
            [`& .${stepClasses.disabled} *`]: {
              color: 'neutral.softDisabledColor',
            },
            [`& .${stepClasses.title}`]: {
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '10px',
            },
          })}
        >
          {steps.map((step, index) => (
            <Step key={index} completed={step.completed} active={step.active} disabled={step.disabled}>
              <Box>
                <StepIndicator
                  variant="solid"
                  color={step.completed ? 'success' : step.active ? 'primary' : 'neutral'}
                  sx={{ width: '2.5rem', height: '2.5rem' }}
                >
                  {step.completed ? (
                    1
                  ) : step.active ? (
                    2
                  ) : (
                    index + 1
                  )}
                </StepIndicator>
                <JoyTypography level="title-sm">{step.label}</JoyTypography>
                <Typography variant="body2" sx={{ ml: 4, mt: 0.5 }}>
                  {step.description}
                </Typography>
              </Box>
            </Step>
          ))}
        </Stepper>

        <Form />
      </div>
    </>
  );
}
