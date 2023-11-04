"use client";
import React from "react";
import AboutComponent from ".";
import { useSpring, animated } from "react-spring";

const HexComponent = () => {
  const slideInProps = useSpring({
    from: { transform: "translateX(-100%)" }, // Start position (fully to the left)
    to: { transform: "translateX(0)" }, // End position (normal position)
    config: { duration: 500 }, // Animation duration in milliseconds
  });

  return (
    <div className="homeMissonContainer">
      <div className="homeMisson">
        <animated.div className="homeMissionFlex" style={slideInProps}>
          <div className="aboutContainerFlex">
            <AboutComponent title="Our Mission" />
          </div>
          <div className="homeTextContainer">
            <p>
              Providing engineering solutions and facility management for the
              benefit of our stakeholders and the environment
            </p>
          </div>
        </animated.div>

        <animated.div className="homeMissionFlex" style={slideInProps}>
          <div className="aboutContainerFlex">
            <AboutComponent title="Our Vision" />
          </div>
          <div className="homeTextContainer">
            <p>
              To eliminate down time in infrastructural management through
              innovation and application of technology
            </p>
          </div>
        </animated.div>

        <animated.div className="homeMissionFlex" style={slideInProps}>
          <div className="aboutContainerFlex">
            <AboutComponent title="Our Values" />
          </div>
          <div className="homeTextContainer">
            <ul>
              <li>Customer driven</li>
              <li>Innovativeness</li>
              <li>Respect for individuals</li>
              <li>Safety of stakeholders</li>
            </ul>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default HexComponent;
