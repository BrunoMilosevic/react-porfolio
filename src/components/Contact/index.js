import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useState } from "react";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance or work opportunities. If you have
            other requests or any questions feel free to contact me!
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
              </ul>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
