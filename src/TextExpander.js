//this is an excercies of buidling a reusable React Componenet
import { useState } from "react";

const textStyle = {
  backgroundColor: "#ddd",
  padding: "4px",
  margin: "1rem",
  borderWidth: "2px",
  borderColor: "#000",
};

export default function TextExpander({
  children = "defaultText",
  collapsedNumWords = 15,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1f09cd",
  className,
  expanded = false,
}) {
  const [showText, setShowText] = useState(expanded);

  function handleExpand() {
    setShowText((t) => !t);
  }

  const buttonStyle = {
    color: buttonColor,
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
  };

  console.log();
  return (
    <div style={textStyle} className={className}>
      <span>
        {showText
          ? children
          : children.split(" ").slice(0, 15).join(" ") + "..."}
      </span>

      <button style={buttonStyle} onClick={handleExpand}>
        {showText ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
