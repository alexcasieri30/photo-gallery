"use client";
import { useEffect, useState } from "react";

const TypewriterTitle = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length-1) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="text-xl sm:text-3xl md:text-5xl font-mono text-green-400 tracking-widest title-text">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypewriterTitle;
