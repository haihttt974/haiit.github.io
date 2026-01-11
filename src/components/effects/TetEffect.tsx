import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

export const TetEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationRef = useRef<number>();

  const colors = [
    '#FFD700', // Gold
    '#FF6B6B', // Red
    '#FF69B4', // Pink (mai flower)
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize petals
    const initPetals = () => {
      const count = Math.floor(window.innerWidth / 20);
      petalsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 1.5 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    initPetals();

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      // Draw cherry blossom petal shape
      ctx.beginPath();
      ctx.moveTo(0, -petal.size);
      ctx.bezierCurveTo(
        petal.size / 2, -petal.size / 2,
        petal.size / 2, petal.size / 2,
        0, petal.size
      );
      ctx.bezierCurveTo(
        -petal.size / 2, petal.size / 2,
        -petal.size / 2, -petal.size / 2,
        0, -petal.size
      );
      ctx.fillStyle = petal.color;
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((petal) => {
        petal.y += petal.speed;
        petal.x += Math.sin(petal.y * 0.01) * 0.5;
        petal.rotation += petal.rotationSpeed;

        if (petal.y > canvas.height + 20) {
          petal.y = -20;
          petal.x = Math.random() * canvas.width;
        }

        drawPetal(petal);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
      />
      {/* Tet decorations */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 z-40" />
      
      {/* Corner decorations */}
      <div className="fixed top-4 left-4 text-3xl z-40 pointer-events-none animate-bounce" style={{ animationDuration: '2s' }}>
        🧧
      </div>
      <div className="fixed top-4 right-4 text-3xl z-40 pointer-events-none animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2s' }}>
        🏮
      </div>
    </>
  );
};
