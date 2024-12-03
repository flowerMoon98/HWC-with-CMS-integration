'use client'

import { useState } from 'react'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Insurance', href: '/insurance' },
  { name: 'Accounting', href: '/accounting' },
  { name: 'Wealth Management', href: '/wealth-management' },
  { name: 'Healthcare', href: '/healthcare' },
  { name: 'Property', href: '/property' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-primary-500 text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Financial Services
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-primary-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {/* Add hamburger icon here */}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:text-primary-50 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
} 