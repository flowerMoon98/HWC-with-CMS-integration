'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { ServiceDropdown } from './ServiceDropdown'
import Link from 'next/link'

export const NavLinks = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="backdrop-blur-md bg-white/10 rounded-full p-1">
      <div className="flex items-center">
        <Link 
          href="/about"
          className="px-6 py-2 rounded-full hover:bg-primary-50 transition-colors text-white hover:text-primary-900"
        >
          About Us
        </Link>
        <div className="relative">
          <button 
            ref={buttonRef}
            className={`px-6 py-2 rounded-full transition-colors text-white hover:text-primary-900 flex items-center gap-1 ${
              isServicesOpen ? 'bg-primary-50 text-primary-900' : 'hover:bg-primary-50'
            }`}
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Our Services
            <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          <div ref={dropdownRef} className="absolute left-0">
            <ServiceDropdown isOpen={isServicesOpen} />
          </div>
        </div>
      </div>
    </div>
  )
}