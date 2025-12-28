import { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

const TypingEffect = ({ 
  text, 
  speed = 100, 
  className = "",
  showCursor = true,
  onComplete
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const onCompleteCalled = useRef(false);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("");
    setCurrentIndex(0);
    onCompleteCalled.current = false;
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && onComplete && !onCompleteCalled.current) {
      onCompleteCalled.current = true;
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && currentIndex < text.length && (
        <span className="animate-blink inline-block w-[2px] h-[1em] bg-current ml-1 align-middle" />
      )}
    </span>
  );
};

export default TypingEffect;

