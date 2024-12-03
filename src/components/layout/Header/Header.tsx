'use client'

import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks/NavLinks'
import { GetInTouch } from './GetInTouch'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/70 backdrop-blur-lg shadow-lg'
          : 'bg-black/10 backdrop-blur-md'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
            <GetInTouch />
          </div>
          {/* Mobile menu button here */}
        </nav>
      </div>
    </header>
  )
}