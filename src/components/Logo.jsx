import React from 'react';

export default function Logo({ variant = 'primary', className = '' }) {
  return (
    <img 
      src="/logo/Zipline%20logo.png" 
      alt="Zipline Express Logo" 
      className={className} 
    />
  );
}
