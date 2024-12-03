import React from 'react';
import Link from 'next/link';

export const GetInTouch = () => {
  return (
    <Link 
      href="/contact"
      className="px-6 py-2 bg-white hover:bg-primary-50 transition-colors text-primary-500 rounded-full font-medium"
    >
      Get in touch
    </Link>
  );
};