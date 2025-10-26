import React, { useState } from "react";

function ProjectCard({ title, description, techStack, image }) {
  const [hovered, setHovered] = useState(false);
  const sampleImage = "https://placehold.co/120x120?text=Sample";
  return (
    <div
      className={`flip-card relative w-80 h-[24rem] cursor-pointer${hovered ? ' flipped' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front Side */}
        <div className="flip-card-front bg-white dark:bg-[var(--primary-color)] flex flex-col items-center justify-between overflow-hidden h-full"
             style={{boxShadow: '0 0 24px 4px #ad54ee'}}>
          <div className="flex-1 flex items-center justify-center w-full">
            <img src={image || sampleImage} alt={title} className="w-28 h-28 object-contain" />
          </div>
          <div className="w-full bg-accent py-4 text-center rounded-b-xl">
            <span className="text-2xl font-bold text-white tracking-wider">{title}</span>
          </div>
        </div>
        {/* Back Side */}
        <div className="flip-card-back px-8 pt-12 text-center bg-white dark:bg-[var(--primary-color)]"
             style={{boxShadow: '0 0 24px 4px #ad54ee'}}>
          <h2 className="text-xl font-bold text-accent mb-6 leading-tight">{title}</h2>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-8 leading-snug">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            {techStack && techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-base bg-accent text-white font-semibold shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
