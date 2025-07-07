'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  'aria-label'?: string;
}

export default function TypewriterText({ words, className = '', 'aria-label': ariaLabel }: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timer = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
        }
      } else {
        if (currentText === word) {
          setIsPaused(true);
        } else {
          setCurrentText(word.substring(0, currentText.length + 1));
        }
      }
    }, isPaused ? pauseDuration : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words]);

  return (
    <span 
      className={`typewriter-text ${className}`}
      aria-label={ariaLabel || `Animated text cycling through: ${words.join(', ')}`}
      aria-live="polite"
    >
      {currentText}
      <span aria-hidden="true" className="sr-only">
        {words.join(', ')}
      </span>
    </span>
  );
}