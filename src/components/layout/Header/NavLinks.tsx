import React from 'react';
import { ChevronDown } from 'lucide-react';

export const NavLinks = () => {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-full p-1">
      <div className="flex items-center">
        <button className="px-6 py-2 rounded-full hover:bg-blue-500/80 transition-colors text-white">
          About Us
        </button>
        <button className="px-6 py-2 rounded-full hover:bg-blue-500/80 transition-colors text-white flex items-center gap-1">
          Our Services
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};