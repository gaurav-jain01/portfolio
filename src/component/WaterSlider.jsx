import React from "react";

const WaterSlider = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 0,
      pointerEvents: "none",
      overflow: "hidden",
    }}
    aria-hidden="true"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        filter: "blur(16px)",
        opacity: 0.5,
      }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ad54ee" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path>
        <animate
          attributeName="d"
          dur="6s"
          repeatCount="indefinite"
          values="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z;
                  M0,120 C360,200 1080,120 1440,200 L1440,320 L0,320 Z;
                  M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
        />
      </path>
      <path
        d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
        fill="url(#waveGradient)"
      />
    </svg>
  </div>
);

export default WaterSlider; 