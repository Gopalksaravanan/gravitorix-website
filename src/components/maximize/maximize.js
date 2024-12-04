import React from "react";
import RapidImage from "../../assets/Vector.svg";
import TopImage from "../../assets/Group.svg";
import Image from "../../assets/Group 69.svg";
import FutureImage from "../../assets/Group 61.png";
import ElevatedImage from "../../assets/Group 67.png";

const Maximize = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6578FF",
      }}
    >
      <h2 style={{ color: "white", fontSize: "35px", marginBottom: 0 }}>
        {" "}
        Maximize Efficiency with an
        <br />
        <span style={{ color: "#FFDC31" }}>Offshore Devolpment Team</span>
      </h2>
      <h5 style={{ color: "white", marginTop: 0, fontSize: "20px" }}>
        Flexible,Adaptable,and Hire When You Need It
      </h5>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "339px",
              height: "284px",
              marginRight: "30px",
            }}
          >
            <img src={RapidImage} loading="lazy" style={{ width: "74px", height: "52px" }} />
            <h4
              style={{
                color: "#FFDC31",
                fontSize: "20px",
                textAlign: "left",
                marginBottom: 0,
              }}
            >
              Rapid Talent Acquisition
            </h4>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                textAlign: "left",
                marginTop: 0,
              }}
            >
              Leverage our extensive talent pool and AI-powered matching system
              for quick deployment within 48 hours. Enjoy flexible hiring
              options on - fixed,hourly or monthly basis.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "339px",
              height: "314px",
              marginRight: "60px",
            }}
          >
            <img src={FutureImage} loading="lazy" style={{ width: "52px", height: "52px" }} />
            <h4
              style={{
                color: "#FFDC31",
                fontSize: "20px",
                textAlign: "left",
                marginBottom: 0,
              }}
            >
              Future Driven Approach
            </h4>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                textAlign: "left",
                marginTop: 0,
              }}
            >
              We gather the most talented individuals to deliver innovative
              solutions, using cutting-edge methodologies that aim to push the
              boundaries of the industry.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "339px",
              height: "284px",
              marginRight: "30px",
            }}
          >
            <img src={TopImage} loading="lazy" style={{ width: "53px", height: "54px" }} />
            <h4
              style={{
                color: "#FFDC31",
                fontSize: "20px",
                textAlign: "left",
                marginBottom: 0,
              }}
            >
              The Top 1 %
            </h4>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                textAlign: "left",
                marginTop: 0,
              }}
            >
              Powered by AI-assisted selection tools.we identify the most
              suitable talent for your specific requirements. Trial your choosen
              offshore developer for free for a week before hiring.Future driven
              approach.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "339px",
              height: "284px",
              marginRight: "30px",
            }}
          >
            <img
              src={ElevatedImage} loading="lazy"
              style={{ width: "51px", height: "51px" }}
            />
            <h4
              style={{
                color: "#FFDC31",
                fontSize: "20px",
                textAlign: "left",
                marginBottom: 0,
              }}
            >
              Elevated Professionalism
            </h4>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                textAlign: "left",
                marginTop: 0,
              }}
            >
              Powered by AI-assisted selection tools.we identify the most
              suitable talent for your specific requirements. Trial your choosen
              offshore developer for free for a week before hiring.
            </p>
          </div>
        </div>

        <img
          src={Image}
          loading="lazy"
          style={{
            width: "374px",
            height: "611px",
            objectFit: "cover",
            marginBottom: "50px",
          }}
        />
      </div>
    </div>
  );
};

export default Maximize;
