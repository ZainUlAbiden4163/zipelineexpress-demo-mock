import React from 'react';

export default function Logo({ variant = 'primary', className = '' }) {
  return (
    <img 
      src="/logo/zipline-express-white-on-navy.svg" 
      alt="Zipline Express Logo" 
      className={className} 
    />
  );
}
