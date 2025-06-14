import React from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage: string;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  backgroundImage, 
  className = '' 
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;