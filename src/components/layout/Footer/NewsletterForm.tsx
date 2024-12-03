'use client'

import { useState } from 'react'
import { InputWithAnimation } from './InputWithAnimation'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <InputWithAnimation
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
      />
      <button
        type="submit"
        className="bg-primary-500 text-white px-6 py-2.5 rounded-md hover:bg-primary-600 transition-colors duration-300 text-sm"
      >
        Sign up
      </button>
    </form>
  )
}

export default NewsletterForm 