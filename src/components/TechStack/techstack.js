import React from "react";

const TechStack = () => {
  const sections = [
    { id: "frontend", label: "Front End", imgSrc: "/frontend_img.PNG" },
    { id: "backend", label: "Back End", imgSrc: "/backend_img.PNG" },
    { id: "mobile", label: "Mobile", imgSrc: "/Mobile_app.PNG" },
    { id: "devops", label: "DevOps/Clouds", imgSrc: "/DevOps.PNG" },
    { id: "design", label: "Design", imgSrc: "/Design.png" },
    {
      id: "quality",
      label: "Quality Assurance",
      imgSrc: "/Quality_Assurance.png",
    },
  ];

  return (
    <section
      id="common_style"
      style={{
        display: "flex",
        backgroundColor: "#8695FD",
        margin: "0 auto",
        padding: 0,
        height: "1200px", // Adjust height dynamically
        flexDirection: "column",
      }}
    >
      <header
        style={{
          margin: "15px auto",
          textAlign: "center",
        }}
      >
        <h1
          id="title"
          style={{
            color: "#FFDC31",
            fontWeight: "bolder",
            fontSize: "40px",
          }}
        >
          TECH STACK
        </h1>
        <p
          id="description"
          style={{
            textAlign: "center",
            lineHeight: 1.1,
            marginTop: "-25px",
            color: "white",
            fontSize: "17px",
          }}
        >
          At Gravitorix, we bring expertise in a wide range of technologies and
          platforms, <br />
          including AI-powered tools, to meet your offshore development needs.
        </p>
      </header>
      <main
        id="tech_stack_container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap", // Enable wrapping
          gap: "50px",
          marginTop: "20px",
          position: "relative",
        }}
      >
        {sections.map((section, index) => (
          <React.Fragment key={section.id}>
            <section
              id={section.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                width: "32%",
                position: "relative",
              }}
            >
              <header
                style={{
                  fontSize: "17px",
                  color: "#FFDC31",
                  backgroundColor: "black",
                  padding: "8px 25px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                {section.label}
              </header>
              <section id={`${section.id}_img`}>
                <img
                  src={section.imgSrc}
                  alt={section.label}
                  title={section.label}
                  loading="lazy"
                  style={{
                    width: "100%",
                    maxWidth: "380px",
                    height: "100%",
                    maxHeight: "150px",
                    
                  }}
                />
                {/* Pseudo-vertical border */}
                {(index + 1) % 2 !== 0 && index < sections.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      
                      right: 0, 
                      width: "2px", 
                      height: "220px", 
                      backgroundColor: "white", 
                   
                    }}
                  />
                )}
              </section>
            </section>
            {(index + 1) % 2 === 0 && index < sections.length - 1 && (
              <hr
                style={{
                  width: "65%",
                  border: "1px solid #fff",
                  margin: "20px auto",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </main>
    </section>
  );
};

export default TechStack;