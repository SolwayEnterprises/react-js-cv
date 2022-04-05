import React, {useState} from "react";

export default function Logo() {

  const [yAxis, setYAxis] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, recordSreenWidth] = useState();
  let transitioner = "";
  let slider = "";
  let imageSize = "";
  let moveUp = null;
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
  if (isScrolled && screenWidth > 1000) {
    if (yAxis < xAxisPoint) {
      transitioner = xAxisPoint - yAxis;
    }
    else if (yAxis >= xAxisPoint) {
      transitioner = 0;
    }
    slider = transitioner + "%";
    imageSize = 25 + transitioner + "%";
  }
  else if (isScrolled && screenWidth <= 1000) {
    if (yAxis < xAxisPoint) {
      slider = 25 + (yAxis - 75) * 1.5 + "%";
      imageSize = 25 + xAxisPoint - yAxis + "%";
    }
    else if (yAxis >= xAxisPoint) {
      slider = 74 + "%";
      imageSize = 25 + "%";
      moveUp = 0;
      showNavBar = true;
    }
  }

  const moveLogo = {
    top: moveUp,
    left: slider,
    width: imageSize,
    opacity: 0.75
  };

  return (
    <div>
      <div className="logo-wrapper" style={showNavBar ? {opacity: 1} : null}></div>
      <div>
        <img
          className="logo"
          style={isScrolled ? moveLogo : null}
          src="./media/logo-transparent.png"
          alt="brand-logo"
        />
      </div>
    </div>
  );
}
