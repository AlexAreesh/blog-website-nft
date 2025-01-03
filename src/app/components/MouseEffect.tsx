'use client';

import { useEffect, useState } from 'react';

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);

  // Update the mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle mouse click (to show the ripple effect)
  const handleClick = (e: React.MouseEvent) => {
    const clickPos = { x: e.clientX, y: e.clientY };
    setClickPosition(clickPos);
    // Reset click effect after a brief moment
    setTimeout(() => setClickPosition(null), 500); // Hide the effect after 500ms
  };

  return (
    <div
      className="relative w-full h-full"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Mouse follow circle */}
      <div
        className="absolute w-10 h-10 bg-[#E2FE26] opacity-70 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 20, // Center the circle around the cursor
          top: mousePosition.y - 20,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease-out',
        }}
      ></div>

      {/* Click ripple effect */}
      {clickPosition && (
        <div
          className="absolute border-2 border-[#E2FE26] rounded-full pointer-events-none"
          style={{
            left: clickPosition.x - 40, // Position the ripple
            top: clickPosition.y - 40,
            width: 80,
            height: 80,
            animation: 'ripple-animation 0.5s ease-out',
          }}
        ></div>
      )}

      <style jsx>{`
        @keyframes ripple-animation {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MouseEffect;
