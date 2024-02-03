import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "B", "O", "U", "T", " ", "M", "E"]}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a meaningful role
            in IT company which will give me the opportunity to contribute to
            challenging and diverse projects.
          </p>
          <p>
            I am naturally curious and constantly working to improve my
            front-end skills
          </p>
          <p>
            I'm also a sports freak, water polo referee and a tech enthusiast
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EfD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="purple" />
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default About;
