'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FormInput } from '../forms/FormInput'

interface ContactFormSectionProps {
  image: string
  isSpecialBackground?: boolean
}

interface FormData {
  name: string
  email: string
  phone: string
  bestTime: string
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ image, isSpecialBackground = false }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    bestTime: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[500px]">
            <Image
              src={image}
              alt="Contact us"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Form Column */}
          <div className={`${isSpecialBackground ? 'bg-[#DBF4FC]' : 'bg-white'} rounded-lg shadow-lg p-8`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                Get in touch
              </h2>
              <p className="text-gray-600">
                Join our community and stay connected with the latest updates
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                label="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />

              <FormInput
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />

              <FormInput
                label="Phone number"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
              />

              <FormInput
                label="Best contact time"
                type="text"
                value={formData.bestTime}
                onChange={handleChange}
                name="bestTime"
              />

              <button
                type="submit"
                className="w-full bg-[#4AA7B5] text-white rounded-md py-2 px-4 hover:bg-[#3d8a96] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 