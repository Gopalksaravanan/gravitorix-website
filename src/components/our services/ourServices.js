import React from "react";
import { Card, CardMedia } from "@mui/material";
import FirstImage from "../../assets/florian-olivo-Ek9Znm8lQ1U-unsplash 1.svg";
import SecondImage from "../../assets/florian-olivo-Ek9Znm8lQ1U-unsplash 1 (1).svg";
import ThirdImage from "../../assets/florian-olivo-Ek9Znm8lQ1U-unsplash 1 (2).svg";

const OurServices = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "#283FE0",
          marginTop: 30,
          marginBottom: 0,
          fontSize: "45px",
        }}
      >
        OUR SERVICES
      </h1>
      <h4 style={{ marginTop: 0, marginBottom: 30, fontSize: "25px" }}>
        Our Offshore Devolpment Services
      </h4>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "283px",
          width: "1200px",
          marginBottom: "50px",
        }}
      >
        <Card
          style={{
            width: "635px",
            height: "274px",
            backgroundColor: "#283FE0",
            color: "#FFFFFF",
            marginRight: "50px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            paddingLeft:'10px',
          }}
        >
          <h5
            style={{
              color: "#FFDC31",
              fontSize: "30px",
              margin: 8,
              textAlign: "left",
            }}
          >
            Hire Dedicated Teams
          </h5>
          <p style={{ fontSize: "16px", margin: 10, textAlign: "left" }}>
            Hire a dedicated devolpment team with highly skilled developers. <br />
            Save yourself from recruitment hassles and infrastructure costs. Our <br />
            AI-enabled  hiring process helps you find the perfect fit for your
            project quickly and efficiently.
          </p>
          <p
            style={{
              fontSize: "25",
              textAlign: "left",
              margin: 10,
              marginTop: 30,
              color: "#FFDC31",
              cursor: "pointer",
              textDecoration:'underline'
            }}
          >
            Enquiry Now
          </p>
        </Card>
        <img
          alt="img"
          src={FirstImage}
          style={{
            width: "515px",
            height: "274px",
            objectFit: "cover",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "283px",
          width: "1200px",
          marginBottom: "50px",
        }}
      >
        <img
          alt="img"
          src={SecondImage}
          style={{
            marginRight: "50px",
            width: "515px",
            height: "274px",
            objectFit: "cover",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Card
          style={{
            width: "635px",
            height: "274px",
            backgroundColor: "#283FE0",
            color: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            paddingLeft:'10px',
          }}
        >
          <h5
            style={{
              color: "#FFDC31",
              fontSize: "30px",
              margin: 8,
              textAlign: "left",
            }}
          >
            Software Devolpment
          </h5>
          <p style={{ fontSize: "16px", margin: 10, textAlign: "left" }}>
            Get progressive software development services at Gravitorix. We
            develop robust, scalable and secured web and mobile applications,
            built using AI-enhanced tools, to level up your business needs.
            Share your ideas, and take your business on a Successful flight !
          </p>
          <p
            style={{
              fontSize: "25",
              textAlign: "left",
              margin: 10,
              marginTop: 30,
              color: "#FFDC31",
              cursor: "pointer",
              textDecoration:'underline'
            }}
          >
            Enquiry Now
          </p>
        </Card>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "283px",
          width: "1200px",
          marginBottom: "50px",
          
        }}
      >
        <Card
          style={{
            width: "635px",
            height: "274px",
            backgroundColor: "#283FE0",
            color: "#FFFFFF",
            marginRight: "50px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            paddingLeft:'10px',
            
          }}
        >
          <h5
            style={{
              color: "#FFDC31",
              fontSize: "30px",
              margin: 8,
              textAlign: "left",
            }}
          >
            Upgrade and Revamp your Project
          </h5>
          <p style={{ fontSize: "16px", margin: 10, textAlign: "left" ,}}>
            Modernize, redesign, and upgrade your application to offer updated 
            and flexible features that will enhance your business performance
            and  uplift your profit margin. We utilize AI-assisted devolpment to 
            simplify the <br /> process and deliver exceptional results faster.
          </p>
          <p
            style={{
              fontSize: "25",
              textAlign: "left",
              margin: 10,
              marginTop: 30,
              color: "#FFDC31",
              cursor: "pointer",
              textDecoration:'underline'
            }}
          >
            Enquiry Now
          </p>
        </Card>
        <img
          alt="img"
          src={ThirdImage}
          style={{
            width: "515px",
            height: "274px",
            objectFit: "cover",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    </div>
  );
};

export default OurServices;
