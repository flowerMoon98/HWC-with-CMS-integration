interface InputWithAnimationProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

export function InputWithAnimation({ value, onChange, placeholder }: InputWithAnimationProps) {
  return (
    <div className="relative group">
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none text-gray-800"
        required
      />
      <span className="absolute bottom-0 right-0 h-0.5 w-full">
        <span className="absolute top-0 right-0 bottom-0 w-0 bg-primary-500 transition-all duration-300 ease-out group-hover:w-full"></span>
      </span>
    </div>
  )
} 