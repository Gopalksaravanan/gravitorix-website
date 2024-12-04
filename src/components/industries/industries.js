import React from "react";
import FintechImage from "../../assets/Group 72.svg";
import EdutechImage from "../../assets/Group 73.svg";
import EcommerceImage from "../../assets/Group 74.svg";
import StreamingImage from "../../assets/steptodown.com189963 1.svg";

const Industries = () => {
  return (
    <div
      style={{
        backgroundColor: "#4056F3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "#FFDC31",
          marginTop: 50,
          marginBottom: 0,
          fontSize: "45px",
        }}
      >
        INDUSTRIES
      </h1>
      <h4
        style={{
          marginTop: 0,
          marginBottom: 60,
          fontSize: "25px",
          color: "white",
        }}
      >
        Clients from Multiple industries rely on us for offshore development
        services, <br />
        enhanced by AI-assisted process.
      </h4>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "371px",
          width: "800px",
          marginBottom: "50px",
        }}
      >
        <img
          src={FintechImage}
          loading="lazy"
          style={{
            height: "371px",
            width: "371px",
            objectFit: "cover",
            marginRight: "60px",
          }}
        />
        <img
          src={EdutechImage}
          loading="lazy"
          style={{
            height: "371px",
            width: "371px",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "371px",
          width: "800px",
          marginBottom: "50px",
        }}
      >
        <img
          src={EcommerceImage}
          loading="lazy"
          style={{
            height: "371px",
            width: "371px",
            objectFit: "cover",
            marginRight: "60px",
          }}
        />
        <img
          src={StreamingImage}
          loading="lazy"
          style={{
            height: "371px",
            width: "371px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Industries;
