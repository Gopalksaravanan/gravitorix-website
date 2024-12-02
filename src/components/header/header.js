import React from "react";

function Header() {
  return (
    <nav
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#283FE0",
        display: "flex",
        width: '100%',
        height: '124px',
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          maxWidth: '90%',
          height: '64.42px',
          // justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          padding: "0 90px",
          boxSizing: "content-box",
          margin: "0 auto",
        }}
      >
        <section
          id="logo"
          style={{
            color: "white",
            fontSize: "24px",
            display: "flex",
          }}
        >
          <img
            src="/logo.PNG"
            alt="Company Logo"
            title="Gravitorix"
            loading="lazy"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </section>
        <section
          id="services"
          style={{
            textAlign: "center",
            color: "white",
            // width: '20px',
            // height: 31,
            marginLeft: "200px",
            marginBottom:'10px'
          }}
        >
          Services
        </section>
        <section
          id="contact"
          style={{
            textAlign: "center",
            color: "white",
            // width: '20px',
            // height: 31,
            //  fontSize:'30px',
            marginLeft: "25px",
            marginBottom:'10px'
          }}
        >
          Contact
        </section>
        <section id="enquirenow-btn">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#000",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginLeft: "25px",
            }}
          >
            Enquire Now
          </button>
        </section>
      </header>
    </nav>
  );
}

export default Header;


