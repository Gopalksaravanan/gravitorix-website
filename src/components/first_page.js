import React from "react";

const FirstPage = () => {
  return (
    <section
      style={{
        backgroundColor: "#E6E6E6",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section
        id="common_style"
        style={{
          margin: "60px auto",
          boxSizing: "border-box",
          borderRadius: "15px",
          width: "55%",
          height: "500px",
          background:
            'linear-gradient(to right, rgba(40, 63, 224,0.8), rgba(0, 204, 255,0.3)), url("/bg_firstpage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 15px 15px rgba(0, 0, 0, 0.3)",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <header
          style={{
            margin: "80px 0 0 80px",
            textAlign: "left",
            color: "#FFDC31",
            fontWeight: "bold",
          }}
        >
          <h2>
            Hire Offshore <br /> Developers
          </h2>
        </header>

        <section
          id="content"
          style={{
            display: "flex",
            marginLeft: "80px ",

            textAlign: "left",
            color: "white",
          }}
        >
          <p>
            Hire offshore developers from our team of <br /> experts who
            utilize advanced AI tools. <br /> We’ve helped global clients in
            scaling <br />
            up faster, accelerating tasks, reducing <br /> development costs by
            100%, and unlocking <br />
            new opportunities with data-driven insights.
          </p>
        </section>
        <section
          id="enquirynow-btn"
          style={{
            display: "flex",
            marginLeft: "80px ",
            marginTop: "30px",
          }}
        >
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <a
              href="#consult"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              Enquire Now
            </a>
          </button>
        </section>
        <section
          id="lt&gt logo"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: "-250px",
            alignItems: "center",
            paddingRight: "20px",
          }}
        >
          <img
            src="/lt & gt symbol.png"
            alt="code_symbol"
            title="code_symbol"
            loading="lazy"
            style={{
              width: "100%",
              maxWidth: "412px",
              height: "100%",
              maxHeight: "313px",
            }}
          />
        </section>
      </section>
    </section>
  );
};

export default FirstPage;
