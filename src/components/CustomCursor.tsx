import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isClickable =
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('button') !== null ||
        target.closest('a') !== null;

      setIsPointer(Boolean(isClickable));
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[999999] select-none"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 500,
        mass: 0.5,
      }}
    >
      <div className="relative -translate-x-1 -translate-y-1">
        {isPointer ? (
          /* شكل إيد قياسي صحيح ومظبوط 100% يشير لأعلى */
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="black"
            stroke="white"
            strokeWidth="1.5"
            className="drop-shadow-md"
          >
            <path d="M10.5 2C9.67157 2 9 2.67157 9 3.5V11.5H8.5C7.67157 11.5 7 12.1716 7 13C7 13.8284 7.67157 14.5 8.5 14.5H9V18.5C9 20.433 10.567 22 12.5 22H14.5C17.5376 22 20 19.5376 20 16.5V11.5C20 10.6716 19.3284 10 18.5 10C18.1022 10 17.7388 10.1544 17.4697 10.4098C16.9928 9.87878 16.2912 9.5 15.5 9.5C15.0294 9.5 14.5938 9.65824 14.2414 9.93237C13.8443 9.38072 13.2081 9 12.5 9C12.1979 9 11.9103 9.0716 11.6521 9.19839V3.5C11.6521 2.67157 10.9805 2 10.5 2Z" />
          </svg>
        ) : (
          /* شكل السهم القياسي */
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="black"
            stroke="white"
            strokeWidth="1.5"
            className="drop-shadow-md"
          >
            <polygon points="5,3 19,12 12,14 17,21 14,23 9,16 5,20" />
          </svg>
        )}
      </div>
    </motion.div>
  );
}
