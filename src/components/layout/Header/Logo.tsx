import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link href="/" className="flex items-center gap-2">
      <span className={`font-bold text-2xl transition-colors duration-300 ${
        isScrolled ? 'text-primary-500' : 'text-white'
      }`}>
        HWC™
      </span>
    </Link>
  );
};