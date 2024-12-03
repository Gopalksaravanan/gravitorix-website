import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
import Typography from '@mui/material/Typography';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const info = [
  {
    title: ["Agile tech-driven", "experience"],   
    icon: <ManageAccountsIcon />,
  },
  {
    title: ["97% client", "retention rate"],  
    icon: <ManageAccountsIcon />,
  },
  {
    title: ["Quick & seamless", "onboarding"],  
    icon: <ManageAccountsIcon />,
  },
  {
    title: ["Fast project", "completion"],   
    icon: <ManageAccountsIcon />,
  },
  {
    title: ["100% confidentiality", "on NDA"],   
    icon: <ManageAccountsIcon />,
  },
];

function Introduction() {
  return (
    <>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {info.map((item, index) => (
            <Grid
              item
              xs={12}  
              sm={6}   
              md={4}    
              lg={2}  
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',  
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',   
                height: 'auto',
              }}
            >
              {/* Connecting lines */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  width: '2px',
                  height: '30px',  
                  backgroundColor: 'black',
                  transform: 'translateX(-50%)',
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "6px",
                  right: "34px", 
                  zIndex: 1,
                  padding: "7px",
                  color: 'white',
                  background: 'black',
                  borderRadius: "25px",
                }}
              >
                {item.icon}
              </Box>

              <Typography
                variant="body2"
                textAlign="center"
                sx={{
                  padding: '16px',
                  backgroundColor: 'blue',
                  color: 'white',
                  wordWrap: 'break-word',
                  whiteSpace: 'normal',
                  lineHeight: '1.4',
                  height: 'auto',
                  width: '50%',  
                  borderRadius: '10px',   
                  mx: 'auto',  
                }}
              >
                {item.title[0]}<br />
                {item.title[1]}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

  
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' , zIndex: 2 }}>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{
            padding: '16px',
            backgroundColor: 'blue',
            color: 'white',
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            lineHeight: '1.4',
            height: 'auto',
            width: '10%',  
            borderRadius: '10px',   
            mx: 'auto',  
            marginTop:2
          }}
        >
          WHO WE ARE
        </Typography>
      </Box> 
    </>
  );
}

export default Introduction;
