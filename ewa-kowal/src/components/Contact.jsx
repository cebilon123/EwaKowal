import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="ContactContainer">
      <p className="Title">Kontakt</p>
      <div className="ContactBox">
        <div className="ContactBox__Body">
          <div className="ContactBox__Body__Question">
            <p>Chcesz się umówić?</p>
            <p>Zadzwoń!</p>
          </div>
          <div className="ContactBox__Body__Numbers">
            <p>502 646 796</p>
            <p>17 857 57 46</p>
          </div>
          <div className="ContactBox__Body__WriteMessenger">
            <p>Lub napisz do nas, odpowiemy jak najszybciej :) </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
