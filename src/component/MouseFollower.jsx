import React, { useEffect, useRef } from "react";

const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (followerRef.current) {
        followerRef.current.style.left = `${e.clientX - 48}px`;
        followerRef.current.style.top = `${e.clientY - 48}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 96,
        height: 96,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "lighten",
      }}
      className="rounded-full blur-2xl opacity-60 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 transition-all duration-75"
    />
  );
};

export default MouseFollower; 