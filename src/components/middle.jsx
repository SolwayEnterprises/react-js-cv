import React from "react";
import Profile from "./middle-sections/profile";
import Skills from "./middle-sections/skills";
import Contact from "./middle-sections/contact";
import Experience from "./middle-sections/experiences-files/experience";

export default function Middle() {
  return (
      <div className="middle" id="about">
        <div className="boundary">
          <Profile />
          <hr />
          <Skills />
          <hr id="Experience" />
          <Experience />
          <hr />
          <Contact />
        </div>
      </div>
  );
}
