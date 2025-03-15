import React from "react";

const BlyndLogo: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120">
      {/* Background Data Points */}
      <circle cx="40" cy="60" r="3" fill="#2196F3" opacity="0.3"/>
      <circle cx="80" cy="40" r="3" fill="#2196F3" opacity="0.3"/>
      <circle cx="120" cy="80" r="3" fill="#2196F3" opacity="0.3"/>
      <circle cx="160" cy="30" r="3" fill="#2196F3" opacity="0.3"/>
      
      {/* Connected Lines */}
      <path d="M40 60 L80 40 L120 80 L160 30" stroke="#2196F3" stroke-width="1" fill="none" opacity="0.2"/>
      
      {/* Main Text */}
      <text x="50" y="75" fontFamily="Ubuntu" fontSize="48" fill="#333333">
        <tspan>blyn</tspan>
        <tspan fill="#2196F3">data</tspan>
      </text>
      
      {/* Stylized Connection Point */}
      <circle cx="250" cy="60" r="8" fill="#2196F3"/>
      <circle cx="250" cy="60" r="12" stroke="#2196F3" stroke-width="2" fill="none"/>
    </svg>
  );
};

export default BlyndLogo;
