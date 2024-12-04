import React from "react";

const Footer = () => {
  return (
    <section
      id="common_style_footer"
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <section
        style={{
          backgroundColor: "#4056F3",
          marginTop: "20px",
          width: "100%",
          height: "500px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px",
          }}
        >
          <section
            id="logo"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/logo.png"
              alt="logo"
              title="logo"
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: "300px",
                left: "140px",
                position: "relative",
              }}
            />
          </section>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <section
            id="social_media"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="/Facebook.png"
              alt="fb-logo"
              title="facebook"
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: "50px",
                left: "130px",
                position: "relative",
              }}
            />
            <img
              src="/X.png"
              alt="X-logo"
              title="X"
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: "50px",
                position: "relative",
                left: "140px",
              }}
            />

            <img
              src="/instagram.png"
              alt="Instagram-logo"
              title="Instagram"
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: "50px",
                position: "relative",
                left: "150px",
              }}
            />
          </section>
        </div>

        <section
          id="hr-line"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src="/hr_line.png"
            alt="hr-line"
            loading="lazy"
            style={{
              position: "relative",
              left: "10px",
              width: "100%",
              maxWidth: "58%",
            }}
          />
        </section>

        <section id="about">
          <p style={{ color: "white", fontSize: "13px" }}>
            We are an IT company offering a suite of web & mobile application
            development services for diverse industry <br /> verticals. Our
            breakthrough solutions, developed with the help of cutting-edge AI
            technologies, empower <br /> businesses to unlock new possibilities
            and gain a competitive edge.
          </p>
        </section>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            flexDirection: "column",
            flexWrap:'wrap'
          }}
        >
          <section
            id="contact"
            style={{
              display: "flex",
              flexDirection:'column',
              alignItems:'center',
              justifyContent: "center",
              backgroundColor: "white",
              boxSizing: "border-box",
              borderRadius: "5px",
              width: "100%",
              maxWidth: "300px",
              height:'auto',
              padding: "10px",
              gap:'10px'
            }}
          >
            <section
              id="email"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              <img
                src="/mail_logo.png"
                alt="mail-logo"
                title="Mail"
                loading="lazy"
                style={{ width: "100%", maxWidth: "14px" }}
              />
              contact@Gravitorix.com
            </section>
            <section
              id="Mobile_number"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              <img
                src="/phone_logo.png"
                alt="phone-logo"
                title="Phone"
                loading="lazy"
                style={{ width: "100%", maxWidth: "14px" }}
              />
              +91 9876543210,+91 7894561230
            </section>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Footer;
