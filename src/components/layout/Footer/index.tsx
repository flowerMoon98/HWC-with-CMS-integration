'use client'

import NewsletterForm from './NewsletterForm'
import FooterNavigation from './FooterNavigation'
import FooterLegal from './FooterLegal'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Sign up for our newsletter
              </h2>
              <p className="text-gray-600 text-sm">
                Protecting your privacy is our policy, we don&apos;t give your
                details to third parties.
              </p>
            </div>

            {/* Company Logo */}
            <div className="text-2xl font-bold text-gray-900">HWC</div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <NewsletterForm />
            <FooterNavigation />
          </div>
        </div>

        <FooterLegal />
      </div>
    </footer>
  )
}

export default Footer 