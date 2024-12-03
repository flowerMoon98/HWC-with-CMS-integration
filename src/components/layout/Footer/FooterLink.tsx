interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="relative inline-block text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm group"
    >
      <span className="relative">
        {children}
        <span className="absolute inset-x-0 bottom-0 h-0.5">
          <span className="absolute top-0 right-0 bottom-0 w-0 bg-gray-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
      </span>
    </a>
  )
} 