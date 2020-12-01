import React from "react";
import "../styles/Contact.css";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.9877892712066!2d22.01693361571553!3d50.011584079417275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfa6a174c8ea1%3A0x3ee58a15d482d521!2sGabinet%20Kosmetyczno%20-%20Fryzjerski%20Kowal%20Ewa!5e0!3m2!1spl!2spl!4v1606815842963!5m2!1spl!2spl"
      frameborder="0"
      allowfullscreen="false"
      aria-hidden="false"
      tabindex="0"
      className="Contact__Container__MapContainer__Map"
    ></iframe>
  );
};

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact__Container">
        <div className="Contact__Container__MapContainer">
          <p className="Contact__Container__MapContainer__text Contact__NormalText">
            Znajdziesz nas na <b>Zalesiu</b>
          </p>
          {Map()}
        </div>
        <p className="Contact__Container_MiddleText Contact__NormalText">
          Albo
        </p>
        <div className="Contact__Container__CallMeContainer">
          <p className="Contact__Container__CallMeContainer__Text Contact__NormalText">
            Zadzwoń do nas
          </p>
          <p className="Contact__Container__CallMeContainer__Number Contact__NormalText">
            tel. 17 8575746
          </p>
          <p className="Contact__Container__CallMeContainer__Number Contact__NormalText">
            tel. 502 646 796
          </p>
          <p className="Contact__Container__CallMeContainer__BottomText Contact__NormalText">
            Lub skontaktuj się przez messenger (
            <i>Kliknij w niebieską chmurkę w rogu ekranu!</i>)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
