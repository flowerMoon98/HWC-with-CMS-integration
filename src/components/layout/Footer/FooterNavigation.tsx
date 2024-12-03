import { FooterLink } from './FooterLink'

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/newsroom', label: 'Newsroom' },
  
]

const serviceLinks = [
  { href: '/insurance', label: 'Insurance' },
  { href: '/accounting', label: 'Accounting' },
  { href: '/wealth', label: 'Wealth Management' },
  { href: '/healthcare', label: 'Healthcare Planning' },
  { href: '/property', label: 'Property' },
]

const FooterNavigation = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Company Links */}
      <div>
        <h3 className="font-bold text-sm text-gray-900 mb-4">Company</h3>
        <div className="space-y-3">
          {companyLinks.map((link) => (
            <div key={link.href}>
              <FooterLink href={link.href}>{link.label}</FooterLink>
            </div>
          ))}
        </div>
      </div>

      {/* Services Links */}
      <div>
        <h3 className="font-bold text-sm text-gray-900 mb-4">Our Services</h3>
        <div className="space-y-3">
          {serviceLinks.map((link) => (
            <div key={link.href}>
              <FooterLink href={link.href}>{link.label}</FooterLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FooterNavigation 