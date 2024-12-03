import React from 'react';
import Link from 'next/link';

const services = [
  { name: 'Insurance', href: '/insurance' },
  { name: 'Accounting', href: '/accounting' },
  { name: 'Wealth Management', href: '/wealth-management' },
  { name: 'Healthcare', href: '/healthcare' },
  { name: 'Property', href: '/property' }
];

export const ServiceDropdown = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-2 py-2 w-64 bg-white rounded-lg shadow-lg">
      {services.map((service) => (
        <Link
          key={service.name}
          href={service.href}
          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 transition-colors"
        >
          {service.name}
        </Link>
      ))}
    </div>
  );
};