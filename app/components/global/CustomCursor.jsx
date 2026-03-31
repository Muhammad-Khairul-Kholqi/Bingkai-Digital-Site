"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const updateMousePosition = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animateCursor = () => {
      if (!dotRef.current || !ringRef.current) return;
      
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      
      dotRef.current.style.left = mx + "px";
      dotRef.current.style.top = my + "px";
      ringRef.current.style.left = rx + "px";
      ringRef.current.style.top = ry + "px";
      
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    document.addEventListener("mousemove", updateMousePosition);
    requestRef.current = requestAnimationFrame(animateCursor);

    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, textarea, .cursor-pointer");
    
    const handleMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1.5)";
        ringRef.current.style.opacity = "1";
      }
    };
    
    const handleMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        ringRef.current.style.opacity = "0.5";
      }
    };
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width: "8px",
          height: "8px",
          background: "#FF6B00",
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: "32px",
          height: "32px",
          border: "1.5px solid #FF6B00",
          borderRadius: "50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "all 0.12s ease",
          opacity: 0.5,
        }}
      />
    </>
  );
}