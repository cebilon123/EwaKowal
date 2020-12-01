import React from "react";
import "../../styles/ServiceContainer.css";

const ServiceContainer = (props) => {
  return (
    <div className="ServiceContainer">
      <header className="SectionHeader">
        <p className="SectionHeader__Title">{props.title}</p>
        <p className="SectionHeader__Subtitle">
          {props.subtitle ? "*" + props.subtitle : null}
        </p>
      </header>
      <section className="ServiceContainer__body">
        <table>
          <thead className="Row__Wrapper">
            <tr>
              <th>
                <p>Nazwa zabiegu</p>
              </th>
              <th>
                <p>Cena</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.services
              ? props.services.map((service) => (
                  <div key={service.id}>
                    <tr className="flex--baseline Row__Wrapper">
                      <th className="Text--Start th__name">
                        <p className="Font--Thin flex--baseline">
                          {service.id}. {service.name}
                        </p>
                      </th>
                      <th className="Text--Start flex--baseline">
                        <p className="Font--Thin">{service.cost}</p>
                      </th>
                    </tr>
                    <div className="Line"></div>
                  </div>
                ))
              : null}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ServiceContainer;
