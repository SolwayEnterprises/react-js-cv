import React from "react";

export default function Contact() {
    return (
        <div id="contact">
          <h2>Get In Touch!</h2>
          <h3>I'd love to talk with you.</h3>
          <p className="contact-message">
            If you're looking for a level 1 programmer, I'm currently open to remote work -
            contract, part-time, full-time, internship, or temporary.
          </p>
          <div className="contact-me">
            <a className="btn" href="mailto:daniel.casella18@gmail.com">
              CONTACT ME
            </a>
          </div>
        </div>
    );
}