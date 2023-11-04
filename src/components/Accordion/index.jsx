import * as React from "react";
import "./accordion.css";

const Accordion = ({ title, children, isOpen, toggleAccordion, id }) => {
  return (
    <div className={`accordion  ${isOpen ? "active" : ""}`} id={id}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
        <span className="accordion-title">{title}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
