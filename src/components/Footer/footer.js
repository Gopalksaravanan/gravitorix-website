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
          // marginTop: "20px",
          width: "100%",
          height: "450px",
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
            alignItems: "center",
            gap: "100px",
            // marginTop: "20px",
          }}
        >
          <section
            id="experience"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="/exp-logo.png"
              alt="experience-logo"
              loading="lazy"
              style={{
                width: "100%",
                maxWidth: "100px",
                position: "relative",
                left: "-100px",
              }}
            />
            <section
              id="year-of-experience"
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "30px",
                lineHeight: "1",
                position: "relative",
                left: "-80px",
              }}
            >
              <span
                style={{
                  fontSize: "60px",
                  color: "#FFDC31",
                  fontWeight: "bold",
                }}
              >
                05+
              </span>
              <span style={{ fontSize: "12px", color: "white" }}>
                Years of Experience
              </span>
            </section>
          </section>

          <section
            id="social_media"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <a
              href="https://www.facebook.com/login.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Facebook.png"
                alt="fb-logo"
                title="facebook"
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: "50px",
                  cursor: "pointer",
                }}
              />
            </a>

            <a
              href="https://x.com/i/flow/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <img
                src="/X.png"
                alt="X-logo"
                title="X"
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: "50px",
                  cursor: "pointer",
                }}
              />
            </a>

            <a
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <img
                src="/instagram.png"
                alt="Instagram-logo"
                title="Instagram"
                loading="lazy"
                style={{
                  width: "100%",
                  maxWidth: "50px",
                  cursor: "pointer",
                }}
              />
            </a>
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
            flexWrap: "wrap",
          }}
        >
          <section
            id="contact"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              boxSizing: "border-box",
              borderRadius: "5px",
              width: "100%",
              maxWidth: "350px",
              height: "auto",
              padding: "10px",
              gap: "10px",
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
        <section
          id="copy-rights"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
           
            // textAlign: "center",
            // width: "100%",
          }}
        >
          <img
            src="/hr_line.png"
            alt="hr-line"
            loading="lazy"
            style={{
              width: "100%",
              maxWidth: "40%",
            }}
          />
          <span
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontSize: "14px",
              whiteSpace: "nowrap",
              color: "white",
            }}
          >
            Copyright &copy; 2024 by Gravitorix. All Rights Reserved.
          </span>
          <img
            src="/hr_line.png"
            alt="hr-line"
            loading="lazy"
            style={{
              width: "100%",
              maxWidth: "40%",
            }}
          />
        </section>
      </section>
    </section>
  );
};

export default Footer;
