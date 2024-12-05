import React from "react";

function Header() {
  return (
    <nav
      style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#283FE0",
        display: "flex",
        width: "100%",
        height: "124px",
        alignItems: "center",
        boxSizing: "border-box",
        justifyContent: "center",
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: "90%",
          height: "64.42px",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          //  padding: "0 10px",
          boxSizing: "border-box",
        }}
      >
        <section
          id="logo"
          style={{
            color: "white",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            left: "-50px",
          }}
        >
          <img
            src="/logo.PNG"
            alt="Company Logo"
            title="Gravitorix"
            loading="lazy"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "25px",
            fontSize: "20px",
            position: "relative",
            left: "50px",
          }}
        >
          <section
            id="services"
            style={{
              textAlign: "center",
              color: "white",
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
              Services
            </a>
          </section>
          <section
            id="contact"
            style={{
              textAlign: "center",
              color: "white",
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
              Contact
            </a>
          </section>
          <section id="enquirenow-btn">
            <button
              style={{
                padding: "12px 20px",
                fontSize: "20px",
                backgroundColor: "#000",
                color: "white",
                border: "none",
                borderRadius: "4px",
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
        </div>
      </header>
    </nav>
  );
}

export default Header;
