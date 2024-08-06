import { useState, useEffect } from "react";
import "./useTypewriterStyles.css";

const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [index, text, speed]);

  return displayText;
};

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return (
    <div className="typewriter-container">
      {displayText.split("\n").map((line, index) => (
        <h1 key={index} className="typewriter-line">
          {line}
        </h1>
      ))}
    </div>
  );
};

export default Typewriter;
