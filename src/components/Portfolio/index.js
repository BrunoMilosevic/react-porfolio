import React, { useState } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          idx={15}
          strArray={"PORTFOLIO".split("")}
          letterClass={letterClass}
        />
      </h1>
      <div>{renderPorfolio()}</div>
    </div>
  );
};

export default Portfolio;
