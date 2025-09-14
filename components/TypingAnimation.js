"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TypingAnimation = ({
  children,
  className = "",
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Simple intersection observer for startOnView functionality
  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startOnView]);

  // Start animation logic
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    if (!isInView) return;

    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, startOnView, isInView]);

  // Typing effect logic
  useEffect(() => {
    if (!started) return;

    const graphemes = Array.from(children);
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < graphemes.length) {
        setDisplayedText(graphemes.slice(0, i + 1).join(""));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      ref={elementRef}
      className={`text-4xl font-bold leading-tight tracking-tight ${className}`}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

export default TypingAnimation;