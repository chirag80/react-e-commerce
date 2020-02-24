import React from "react";

const Hero = ({ children }) => {
  return (
    <>
      <div>
        <h1>think, code, deploy</h1>
        <p>Embrace your choices - we do</p>
        {children}
      </div>
    </>
  );
};

export default Hero;
