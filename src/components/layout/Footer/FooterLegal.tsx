import { FooterLink } from './FooterLink'

const FooterLegal = () => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex space-x-4">
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/legal">Legal</FooterLink>
        </div>
        <div>
          {/* Add social icons here if needed */}
        </div>
      </div>
    </div>
  )
}

export default FooterLegal 