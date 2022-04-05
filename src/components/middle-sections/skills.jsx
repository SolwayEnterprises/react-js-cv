import React, {useState} from "react";

export default function Skills() {

    const [textStart, setTextStart] = useState();
    const [isMiddle, setIsMiddle] = useState(false);
    let lionSpeech = "";
  
    window.addEventListener("scroll", () => {
      setTextStart(window.scrollY);
      if (textStart > 825 && textStart < 1650) {
        setIsMiddle(true);
      } else {
        setIsMiddle(false);
      };
    });
  
    if (isMiddle) {
      lionSpeech = - textStart + 825 + "px";
    }
  
    const moveSpeech = {
      top: lionSpeech
    };

    return (
        <div className="skills">
        <h2 className="skill-header">My Skills.</h2>
        <div className="skill-row top-skill">
          <img src="./media/Lion-speech.PNG" style={isMiddle ? moveSpeech : null} className="lion-speech" alt="moving page icon" />
          <div className="cutout" />
          <img src="./media/Lion-speech-sm.PNG" className="lion-speech-sm" alt="static page icon" />
          <h3>Proofreading & Writing</h3>
          <p>
            At an early age, I developed a keen eye for detail through close study of picture
            tutorials and writing styles with their rules. At university, I studied journalism to
            further my skill in critical analysis and writing.
          </p>
        </div>
        <div className="skill-row bottom-skill">
          <img src="./media/hyper-terminal.gif" className="terminal" alt="terminal gif" />
          <img src="./media/hyper-terminal.gif" className="terminal-sm" alt="terminal gif" />
          <h3>Programming</h3>
          <p>
            In recent months, I've discovered how much skills of critical analysis and creative
            writing filter into programming. I've since dived full-time into the studying and
            practicing of web development.
          </p>
        </div>
      </div>
    );
}