import { useState } from "react";

const Description = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => setExpanded(!expanded);

  return (
    <div>
      <p
        className="text-sm mb-2 leading-relaxed"
        style={{
          color: "var(--text-color-secondary)",
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "unset" : 2,   // 2 lines only
          WebkitBoxOrient: "vertical",
          overflow: "hidden"
        }}
      >
        {description}
      </p>

      {/* Show Button Only if text is long */}
      {description.length > 80 && (
        <button
          onClick={toggleText}
          className="text-blue-500 text-sm"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default Description;
