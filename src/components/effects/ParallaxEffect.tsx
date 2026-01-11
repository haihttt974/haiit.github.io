import { useEffect, useState } from 'react';

export const ParallaxEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layer 1 - Slowest, furthest */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={`l1-${i}`}
            className="absolute w-64 h-64 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
              left: `${(i * 25) % 100}%`,
              top: `${(i * 20 + 10) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Layer 2 - Medium */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={`l2-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${(i * 13 + 5) % 100}%`,
              top: `${(i * 17 + 15) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Layer 3 - Fastest, closest */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={`l3-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${(i * 8 + 2) % 100}%`,
              top: `${(i * 9 + 5) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 60%)',
          left: '10%',
          top: '20%',
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(280, 100%, 60%) 0%, transparent 60%)',
          right: '15%',
          bottom: '25%',
          transform: `translate(${-mousePosition.x * 25}px, ${-mousePosition.y * 25}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
    </div>
  );
};
