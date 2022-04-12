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
    
    if (screenWidth <= 1500 && screenWidth > 1400) {
      imageSize = 23 + transitioner + "%";
    }
    else if (screenWidth <= 1400 && screenWidth > 1300) {
      imageSize = 21 + transitioner + "%";
    }
    else if (screenWidth <= 1300 && screenWidth > 1200) {
      imageSize = 18.5 + transitioner + "%";
    }
    else if (screenWidth <= 1200 && screenWidth > 1100) {
      imageSize = 16 + transitioner + "%";
    }
    else if (screenWidth <= 1100 && screenWidth > 1050) {
      imageSize = 15 + transitioner + "%";
    }
    else if (screenWidth <= 1050 && screenWidth > 1000) {
      imageSize = 16 + transitioner + "%";
    }
    else if (screenWidth <= 1000 && screenWidth > 950) {
      imageSize = 17 + transitioner + "%";
    }
    else if (screenWidth <= 950 && screenWidth > 900) {
      imageSize = 18 + transitioner + "%";
    }
    else if (screenWidth <= 900 && screenWidth > 850) {
      imageSize = 19 + transitioner + "%";
    }
    else if (screenWidth <= 850 && screenWidth > 800) {
      imageSize = 20 + transitioner + "%";
    }
    else if (screenWidth <= 800 && screenWidth > 750) {
      imageSize = 21 + transitioner + "%";
    } else {
      imageSize = 25 + transitioner + "%";
    }

    if (screenWidth <= 1100) {
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
