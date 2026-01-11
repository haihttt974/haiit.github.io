import { SnowEffect } from './SnowEffect';

export const ChristmasEffect = () => {
  return (
    <>
      <SnowEffect />
      {/* Christmas decorations */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-green-600 to-red-600 z-40" />
      
      {/* Corner decorations */}
      <div className="fixed top-4 left-4 text-4xl animate-pulse z-40 pointer-events-none">
        🎄
      </div>
      <div className="fixed top-4 right-4 text-4xl animate-pulse z-40 pointer-events-none" style={{ animationDelay: '0.5s' }}>
        ⭐
      </div>
      
      {/* Floating lights */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: '20px',
              backgroundColor: i % 2 === 0 ? '#ef4444' : '#22c55e',
              animationDelay: `${i * 0.2}s`,
              boxShadow: `0 0 10px ${i % 2 === 0 ? '#ef4444' : '#22c55e'}`,
            }}
          />
        ))}
      </div>
    </>
  );
};
