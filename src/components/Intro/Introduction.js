import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/joy";
import Image1 from "../../assets/Group 25.svg";
import IntroductionImage from "../../assets/introduction.svg";
import Experienceimage from "../../assets/Group 34.svg";

function IntroductionComponent() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Grid container spacing={2} alignItems="stretch" sx={{ width: "100%" }}>
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
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                textAlign: "left",
                color: "#283fe0",
              }}
            >
              Trusted Offshore Developers for Your Tech Needs
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: 2,
                fontSize: 18,
                lineBreak: 1.5,
                textAlign: "left",
              }}
            >
              Looking to hire offshore developers for your projects? At{" "}
              <span style={{ fontWeight: "bold" }}>Gravitorix</span>, we are
              passionate about creating innovative software solutions that
              empower businesses and redefine possibilities. Our expertise spans
              across diverse industries such as{" "}
              <span style={{ fontWeight: "bold" }}>
                Fintech, OTT platforms, Edutech, and E-commerce,
              </span>{" "}
              where we deliver cutting-edge technology tailored to your needs.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 18, lineBreak: 1.5, textAlign: "left" }}
            >
              Our mission is to empower our clients with tools that enhance
              productivity, drive growth, and ensure seamless user experiences.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: 18, lineBreak: 1.5, textAlign: "left",marginTop:'10px',fontStyle:'italic' }}
            >
              Let’s innovate, collaborate, and shape the future together!
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
      {/* <Box sx={{ width: "100%",  display: "flex", justifyContent: "center"  }}>
        <img
          src={Experienceimage}
          alt="Experience Image "
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "900px",
            maxHeight: "137px",
            marginBottom:"50px"
          }}
        />
      </Box> */}
    </div>
  );
}

export default IntroductionComponent;
