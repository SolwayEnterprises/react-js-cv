import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bottom-container">
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/daniel-casella-81930964/"
      >
        LinkedIn
      </a>
      <a className="footer-link" href="https://www.facebook.com/daniel.s.casella/">
        Facebook
      </a>
      <p className="copy-right">© Daniel Casella {currentYear}.</p>
    </div>
  );
}
