import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/joy";
import Image1 from "../../assets/Group 25.svg";
import IntroductionImage from "../../assets/introduction.svg";
import Experienceimage from '../../assets/Group 34.svg'

function IntroductionComponent() {
  return (
    <>
      <div>
      <div style={{ display: "flex", justifyContent: "center", marginTop:-30 }}>
        <img
          src={IntroductionImage}
          alt="Introduction map"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "1000px",
            maxHeight: "383px",
          }}
        />
      </div>

      <Box
        className="text-content"
        sx={{
          padding: "20px",
          width: "100%",
          maxWidth: "1190px",
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
          position: "relative",
          marginTop:3,
          marginBottom:3
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          sx={{ width: "100%" }}
        >

          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Trusted Offshore Developers for Your Tech Needs
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, fontSize: 18 , lineBreak:1.5}}>
              Looking to hire offshore developers for your projects? Gravitorix is proud to present its pool of XX+ tech
              experts, with experience across various domains. Our dedicated developers are proficient in various
              technologies, tools, and frameworks. With our AI-powered development practices, scale your team as needed
              without the issue of long-term commitments.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 18, lineBreak:1.5 }}>
              Get in touch to discuss your project requirements, access our 40-hour free trial, and hire software
              developers for your team! Let Gravitorix be your trusted outsourcing partner for all your remote tech
              hiring needs.
            </Typography>
          </Grid>


          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Image1}
              alt="Small Image 1"
              style={{
                width: "100%",
                maxWidth: "454px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%",  display: "flex", justifyContent: "center"  }}>
        <img
          src={Experienceimage}
          alt="Experience Image "
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "900px",
            maxHeight: "137px",
          }}
        />
      </Box>
      </div>
    </>
  );
}

export default IntroductionComponent;
