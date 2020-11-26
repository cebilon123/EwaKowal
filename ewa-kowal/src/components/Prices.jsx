import React from "react";
import "../styles/Prices.css";
import ServiceContainer from "./reusable/ServiceContainer";
import services from "../assets/services.json";

const servicesContainers = services.map((service) => {
  return <ServiceContainer title={service.title} services={service.services} />;
});

const Prices = (props) => {
  return (
    <div className="PricesContainer">
      <p className="Title">Zabiegi</p>
      <div className="PricesBox">{servicesContainers}</div>
    </div>
  );
};

export default Prices;
