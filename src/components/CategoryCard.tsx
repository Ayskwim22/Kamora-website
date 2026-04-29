import React, { useState } from 'react';

interface CategoryCardProps {
  categoryNumber: number;
  title: string;
  description: string;
  image: string;
  onExplore: () => void;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryNumber,
  title,
  description,
  image,
  onExplore,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-[380px] opacity-0"
      style={{
        animation: `fadeInScale 0.65s ease-out forwards ${index * 0.1}s`,
      }}
    >
      <div
        className="relative h-full rounded-[28px] bg-white overflow-hidden shadow-lg transition-all duration-500 ease-out cursor-pointer"
        style={{
          transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered
            ? '0 30px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)'
            : '0 10px 25px rgba(0,0,0,0.15)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Card Header with Title and Number Badge */}
        <div className="bg-white p-6 pb-5">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                {title.toUpperCase()}
              </h3>
            </div>
            {/* Number Badge */}
            <div className="flex-shrink-0 bg-red-100 rounded-lg px-3 py-2">
              <span className="text-sm font-bold text-red-500">
                #{String(categoryNumber).padStart(3, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Product Image Section - ENLARGED */}
        <div className="relative h-80 overflow-hidden bg-white flex items-center justify-center px-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.12) rotate(2deg)' : 'scale(1) rotate(0deg)',
            }}
          />
        </div>

        {/* Description Section */}
        <div className="p-6 pb-4">
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{description}</p>
        </div>

        {/* Price/Action Button Section */}
        <div className="px-6 py-4">
          <button
            onClick={onExplore}
            className="w-full py-4 px-6 rounded-2xl font-bold text-white text-lg transition-all duration-400 ease-out relative overflow-hidden"
            style={{
              background: isHovered
                ? 'linear-gradient(135deg, #ff6b5b 0%, #ff5a48 100%)'
                : 'linear-gradient(135deg, #ff7a6a 0%, #ff6857 100%)',
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              boxShadow: isHovered
                ? '0 12px 24px rgba(255, 107, 91, 0.4), inset 0 -2px 4px rgba(0,0,0,0.1)'
                : '0 6px 16px rgba(255, 107, 91, 0.25)',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>EXPLORE</span>
              <span
                style={{
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                →
              </span>
            </span>
            {/* Shimmer effect on hover */}
            <div
              className="absolute top-0 left-0 w-full h-full bg-white/20 transition-all duration-500"
              style={{
                transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
              }}
            />
          </button>
        </div>

      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryCard;
