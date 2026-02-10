import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Description from "./description";

function ProjectCard({ title, description, techStack, image, liveUrl, githubUrl }) {
  const [hovered, setHovered] = useState(false);
  const sampleImage = "https://placehold.co/120x120?text=Sample";

  return (
    <div
      className={`flip-card relative w-72 h-80 cursor-pointer${hovered ? " flipped" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front Side */}
        <div
          className="flip-card-front flex flex-col items-center justify-between overflow-hidden h-full"
          style={{
            background: "var(--card-bg)",
            boxShadow: "0 0 24px 4px var(--accent-glow)",
            border: "1px solid var(--border-color)",
          }}
        >
         <div className="flex-1 flex items-center justify-center w-full">
          <img
            src={image || sampleImage}
            alt={title}
            className="w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain"
          />
        </div>

          <div
            className="w-full py-3 text-center rounded-b-2xl"
            style={{ background: "var(--accent-color)" }}
          >
            <span className="text-lg font-bold text-white tracking-wide">
              {title}
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="flip-card-back px-6 pt-6 pb-5 text-center flex flex-col justify-between h-full"
          style={{
            background: "var(--card-bg)",
            boxShadow: "0 0 24px 4px var(--accent-glow)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div>
            <h2
              className="text-lg font-bold mb-3 leading-tight"
              style={{ color: "var(--accent-color)" }}
            >
              {title}
            </h2>
            <p
              className="text-sm mb-4 leading-relaxed"
              style={{ color: "var(--text-color-secondary)" }}
            >
              <Description description={description} />
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack &&
                techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: "var(--accent-color)" }}
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-center mt-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--accent-color)",
                  color: "white",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--primary-color)",
                  color: "var(--text-color-primary)",
                  border: "1px solid var(--border-color)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
