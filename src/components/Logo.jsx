import React from 'react';

const Logo = ({ width = 120, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4c5ab" />
          <stop offset="100%" stopColor="#b79b6c" />
        </linearGradient>
      </defs>
      
      {/* Background circle for the 'Z' */}
      <circle cx="22" cy="20" r="14" fill="url(#goldGradient)" />
      
      {/* 'Z' */}
      <text
        x="22"
        y="25"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="22"
        fontFamily="'Playfair Display', serif"
        fontWeight="bold"
      >
        Z
      </text>
      
      {/* Ziva */}
      <text
        x="70"
        y="20"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#b79b6c"
        fontSize="18"
        fontFamily="'Playfair Display', serif"
        fontWeight="bold"
        letterSpacing="1"
      >
        ZIVA
      </text>
      
      {/* Jewellery */}
      <text
        x="70"
        y="32"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#666666"
        fontSize="8"
        fontFamily="'Poppins', sans-serif"
        letterSpacing="2"
      >
        JEWELLERY
      </text>
      
      {/* Small diamond decoration */}
      <polygon
        points="105,15 108,18 105,21 102,18"
        fill="url(#goldGradient)"
      />
    </svg>
  );
};

export default Logo; 