import React, {useState} from "react";

export default function Logo() {

  const [yAxis, setYAxis] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, recordSreenWidth] = useState();
  let transitioner = "";
  let slider = "";
  let imageSize = "";
  let showNavBar = false;

  window.addEventListener("scroll", () => {
    recordSreenWidth(window.innerWidth);
    setYAxis(window.scrollY);
    if (yAxis <= 75) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  });

  const xAxisPoint = 100;
  if (isScrolled) {
    if (yAxis < xAxisPoint) {
      transitioner = xAxisPoint - yAxis;
    }
    else if (yAxis >= xAxisPoint) {
      transitioner = 0;
    }
    slider = transitioner + "%";
    imageSize = 25 + transitioner + "%";
    if (screenWidth <= 1000) {
      showNavBar = true;
    }
  }

  const moveLogo = {
    top: 0,
    right: slider,
    width: imageSize,
    opacity: 0.75
  };

  return (
    <div>
      <div className="navbar" style={showNavBar ? {opacity: 1} : null}></div>
      <div>
        <img
          className="logo"
          style={isScrolled || window.scrollY > 75 ? moveLogo : null}
          src="./media/logo-transparent.png"
          alt="brand-logo"
        />
      </div>
    </div>
  );
}
