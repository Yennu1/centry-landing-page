"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  phrases: readonly string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  phrases,
  typeSpeed = 55,
  deleteSpeed = 32,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, typeSpeed);
        } else {
          // Pause at full phrase, then start deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          timeoutRef.current = setTimeout(tick, deleteSpeed);
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseDuration]);

  return displayText;
}
