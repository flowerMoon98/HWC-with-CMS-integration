import React, { useState } from 'react'

interface FormInputProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}

export const FormInput: React.FC<FormInputProps> = ({ label, type, value, onChange, name }) => {
  const [isFocused, setIsFocused] = useState(false)
  const isFloating = isFocused || value.length > 0

  return (
    <div className="relative mb-6 group">
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="block w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none text-gray-900 peer"
          placeholder=" "
          required
        />

        <label
          className={`absolute text-base duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] 
            ${isFloating ? 'text-gray-600 -translate-y-6' : 'text-gray-500'}
            peer-placeholder-shown:scale-100 
            peer-placeholder-shown:translate-y-0
            peer-focus:text-black
            peer-focus:-translate-y-6
            peer-focus:scale-75
            group-hover:text-black left-0
            select-none
            cursor-text`}
        >
          {label}
        </label>
      </div>

      <span className="absolute bottom-0 right-0 h-0.5 w-full">
        <span className="absolute top-0 right-0 bottom-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
      </span>
    </div>
  )
} 