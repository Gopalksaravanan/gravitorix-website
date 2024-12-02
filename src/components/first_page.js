import React from "react";

const FirstPage = () => {
  return (
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
      }}
    >
      <h2 >Hire Offshore <br /> Developers</h2>
    </section>
  );
};

export default FirstPage;
