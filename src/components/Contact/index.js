import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_25ymqoq",
        "template_s5hj1eb",
        form.current,
        "zhi0k43gm9PYC0b-9"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message! Please try again");
        }
      );
  };
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
            <form ref={form} onSubmit={sendEmail}>
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
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Bruno Milošević,
          <br />
          Osijek Croatia
          <br />
          <span>brunomilosevic1234@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[45.498647, 18.709717]} zoom={5}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[45.498647, 18.709717]}>
              <Popup>Bruno</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
